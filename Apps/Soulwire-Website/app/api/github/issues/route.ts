import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

// Submit a new issue to GitHub from the website
export async function POST(request: NextRequest) {
  try {
    const { title, body, labels } = await request.json()

    // Create issue on GitHub
    const response = await fetch(
      `https://api.github.com/repos/${process.env.GITHUB_REPO_OWNER}/${process.env.GITHUB_REPO_NAME}/issues`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          "Content-Type": "application/json",
          Accept: "application/vnd.github+json",
        },
        body: JSON.stringify({
          title,
          body,
          labels: labels || ["bug", "from-website"],
        }),
      },
    )

    if (!response.ok) {
      throw new Error("Failed to create GitHub issue")
    }

    const issue = await response.json()

    // Store in database
    const supabase = await createClient()
    await supabase.from("github_issues").insert({
      issue_number: issue.number,
      title: issue.title,
      body: issue.body,
      state: issue.state,
      labels: issue.labels.map((l: any) => l.name),
      created_at_github: issue.created_at,
      updated_at_github: issue.updated_at,
      closed_at: issue.closed_at,
      url: issue.html_url,
    })

    return NextResponse.json({ success: true, issue })
  } catch (error) {
    console.error("[v0] Error creating GitHub issue:", error)
    return NextResponse.json({ error: "Failed to create issue" }, { status: 500 })
  }
}

// Get recent issues
export async function GET() {
  try {
    const supabase = await createClient()
    const { data: issues, error } = await supabase
      .from("github_issues")
      .select("*")
      .order("updated_at_github", { ascending: false })
      .limit(50)

    if (error) throw error

    return NextResponse.json({ issues })
  } catch (error) {
    console.error("[v0] Error fetching issues:", error)
    return NextResponse.json({ error: "Failed to fetch issues" }, { status: 500 })
  }
}
