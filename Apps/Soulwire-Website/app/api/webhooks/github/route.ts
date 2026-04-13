import { createClient } from "@/lib/supabase/server"
import { type NextRequest, NextResponse } from "next/server"
import crypto from "crypto"

// Verify GitHub webhook signature
function verifyGitHubSignature(payload: string, signature: string, secret: string) {
  const hmac = crypto.createHmac("sha256", secret)
  const digest = "sha256=" + hmac.update(payload).digest("hex")
  return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(digest))
}

export async function POST(request: NextRequest) {
  try {
    const payload = await request.text()
    const signature = request.headers.get("x-hub-signature-256")
    const event = request.headers.get("x-github-event")

    // Verify webhook signature (add GITHUB_WEBHOOK_SECRET to your env vars)
    const secret = process.env.GITHUB_WEBHOOK_SECRET
    if (secret && signature) {
      const isValid = verifyGitHubSignature(payload, signature, secret)
      if (!isValid) {
        return NextResponse.json({ error: "Invalid signature" }, { status: 401 })
      }
    }

    const data = JSON.parse(payload)
    const supabase = await createClient()

    // Handle different GitHub events
    if (event === "push") {
      // Store commits
      const commits = data.commits || []
      for (const commit of commits) {
        await supabase.from("github_commits").upsert(
          {
            sha: commit.id,
            message: commit.message,
            author_name: commit.author.name,
            author_email: commit.author.email,
            committed_at: commit.timestamp,
            url: commit.url,
          },
          { onConflict: "sha" },
        )
      }
    }

    if (event === "release") {
      // Store release
      const release = data.release
      await supabase.from("github_releases").upsert(
        {
          release_id: release.id,
          tag_name: release.tag_name,
          name: release.name,
          body: release.body,
          published_at: release.published_at,
          url: release.html_url,
          is_prerelease: release.prerelease,
        },
        { onConflict: "release_id" },
      )
    }

    if (event === "issues") {
      // Store or update issue
      const issue = data.issue
      await supabase.from("github_issues").upsert(
        {
          issue_number: issue.number,
          title: issue.title,
          body: issue.body,
          state: issue.state,
          labels: issue.labels.map((l: any) => l.name),
          created_at_github: issue.created_at,
          updated_at_github: issue.updated_at,
          closed_at: issue.closed_at,
          url: issue.html_url,
        },
        { onConflict: "issue_number" },
      )

      // Auto-update roadmap based on issue labels and status
      if (issue.labels.some((l: any) => l.name.includes("roadmap"))) {
        await updateRoadmapFromIssue(supabase, issue)
      }
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[v0] GitHub webhook error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

async function updateRoadmapFromIssue(supabase: any, issue: any) {
  // Find roadmap item linked to this issue
  const { data: roadmapItems } = await supabase
    .from("roadmap_items")
    .select("*")
    .contains("github_issue_ids", [issue.id])

  if (roadmapItems && roadmapItems.length > 0) {
    const item = roadmapItems[0]

    // Update status based on issue state
    let status = item.status
    let progress = item.progress
    let completed_at = item.completed_at

    if (issue.state === "closed") {
      status = "completed"
      progress = 100
      completed_at = new Date().toISOString()
    } else if (issue.state === "open" && status === "planned") {
      status = "in-progress"
      progress = 10
    }

    await supabase
      .from("roadmap_items")
      .update({ status, progress, completed_at, updated_at: new Date().toISOString() })
      .eq("id", item.id)
  }
}
