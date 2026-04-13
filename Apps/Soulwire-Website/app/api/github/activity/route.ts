import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

// Get recent GitHub activity (commits, releases, issues)
export async function GET() {
  try {
    const supabase = await createClient()

    // Fetch recent commits
    const { data: commits } = await supabase
      .from("github_commits")
      .select("*")
      .order("committed_at", { ascending: false })
      .limit(20)

    // Fetch recent releases
    const { data: releases } = await supabase
      .from("github_releases")
      .select("*")
      .order("published_at", { ascending: false })
      .limit(10)

    // Fetch open issues (bugs being worked on)
    const { data: issues } = await supabase
      .from("github_issues")
      .select("*")
      .eq("state", "open")
      .order("updated_at_github", { ascending: false })
      .limit(20)

    return NextResponse.json({
      commits: commits || [],
      releases: releases || [],
      issues: issues || [],
    })
  } catch (error) {
    console.error("[v0] Error fetching GitHub activity:", error)
    return NextResponse.json({ error: "Failed to fetch activity" }, { status: 500 })
  }
}
