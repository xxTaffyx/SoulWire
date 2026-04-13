"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, GitCommit, Tag, Bug, Calendar } from "lucide-react"

type Commit = {
  id: string
  sha: string
  message: string
  author_name: string
  committed_at: string
  url: string
  additions?: number
  deletions?: number
}

type Release = {
  id: string
  tag_name: string
  name: string
  body: string
  published_at: string
  url: string
  is_prerelease: boolean
}

type Issue = {
  id: string
  issue_number: number
  title: string
  body: string
  state: string
  labels: string[]
  updated_at_github: string
  url: string
}

export function GitHubActivityFeed() {
  const [commits, setCommits] = useState<Commit[]>([])
  const [releases, setReleases] = useState<Release[]>([])
  const [issues, setIssues] = useState<Issue[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<"all" | "commits" | "releases" | "issues">("all")

  useEffect(() => {
    fetchActivity()
  }, [])

  const fetchActivity = async () => {
    try {
      const response = await fetch("/api/github/activity")
      const data = await response.json()
      setCommits(data.commits)
      setReleases(data.releases)
      setIssues(data.issues)
    } catch (error) {
      console.error("[v0] Error fetching activity:", error)
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))

    if (diffDays === 0) return "Today"
    if (diffDays === 1) return "Yesterday"
    if (diffDays < 7) return `${diffDays} days ago`
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`
    return date.toLocaleDateString()
  }

  if (loading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-24 bg-charcoal/50 animate-pulse rounded-lg" />
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Filter buttons */}
      <div className="flex gap-2 flex-wrap">
        <Button variant={filter === "all" ? "default" : "outline"} size="sm" onClick={() => setFilter("all")}>
          All Activity
        </Button>
        <Button variant={filter === "commits" ? "default" : "outline"} size="sm" onClick={() => setFilter("commits")}>
          <GitCommit className="w-4 h-4 mr-2" />
          Commits ({commits.length})
        </Button>
        <Button variant={filter === "releases" ? "default" : "outline"} size="sm" onClick={() => setFilter("releases")}>
          <Tag className="w-4 h-4 mr-2" />
          Releases ({releases.length})
        </Button>
        <Button variant={filter === "issues" ? "default" : "outline"} size="sm" onClick={() => setFilter("issues")}>
          <Bug className="w-4 h-4 mr-2" />
          Issues ({issues.length})
        </Button>
      </div>

      {/* Activity feed */}
      <div className="space-y-3">
        {/* Releases */}
        {(filter === "all" || filter === "releases") &&
          releases.map((release) => (
            <div
              key={release.id}
              className="border border-teal/20 rounded-lg p-4 hover:border-teal/40 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Tag className="w-4 h-4 text-teal" />
                    <h3 className="font-semibold text-foreground">{release.name}</h3>
                    <Badge variant="outline" className="text-xs">
                      {release.tag_name}
                    </Badge>
                    {release.is_prerelease && (
                      <Badge variant="secondary" className="text-xs">
                        Pre-release
                      </Badge>
                    )}
                  </div>
                  {release.body && <p className="text-sm text-muted-foreground line-clamp-2">{release.body}</p>}
                  <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {formatDate(release.published_at)}
                    </span>
                  </div>
                </div>
                <a
                  href={release.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}

        {/* Commits */}
        {(filter === "all" || filter === "commits") &&
          commits.map((commit) => (
            <div
              key={commit.id}
              className="border border-border/50 rounded-lg p-4 hover:border-border transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <GitCommit className="w-4 h-4 text-violet" />
                    <code className="text-xs text-muted-foreground font-mono">{commit.sha.substring(0, 7)}</code>
                  </div>
                  <p className="text-sm text-foreground mb-2">{commit.message}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>{commit.author_name}</span>
                    <span>{formatDate(commit.committed_at)}</span>
                    {commit.additions !== undefined && <span className="text-green-500">+{commit.additions}</span>}
                    {commit.deletions !== undefined && <span className="text-red-500">-{commit.deletions}</span>}
                  </div>
                </div>
                <a
                  href={commit.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet hover:text-violet/80 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}

        {/* Issues */}
        {(filter === "all" || filter === "issues") &&
          issues.map((issue) => (
            <div key={issue.id} className="border border-gold/20 rounded-lg p-4 hover:border-gold/40 transition-colors">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Bug className="w-4 h-4 text-gold" />
                    <h3 className="font-semibold text-foreground">
                      #{issue.issue_number} {issue.title}
                    </h3>
                  </div>
                  {issue.body && <p className="text-sm text-muted-foreground line-clamp-2">{issue.body}</p>}
                  <div className="flex items-center gap-2 mt-2 flex-wrap">
                    {issue.labels.map((label) => (
                      <Badge key={label} variant="secondary" className="text-xs">
                        {label}
                      </Badge>
                    ))}
                    <span className="text-xs text-muted-foreground ml-auto">
                      Updated {formatDate(issue.updated_at_github)}
                    </span>
                  </div>
                </div>
                <a
                  href={issue.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:text-gold/80 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
      </div>

      {/* Empty state */}
      {filter === "all" && commits.length === 0 && releases.length === 0 && issues.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          <Bug className="w-12 h-12 mx-auto mb-4 opacity-50" />
          <p>No activity yet. GitHub updates will appear here.</p>
        </div>
      )}
    </div>
  )
}
