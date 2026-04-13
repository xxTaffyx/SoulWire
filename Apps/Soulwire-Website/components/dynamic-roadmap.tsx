"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { CheckCircle2, Clock, Circle } from "lucide-react"

type RoadmapItem = {
  id: string
  title: string
  description: string
  category: string
  status: string
  progress: number
  github_issue_ids: string[]
  target_date: string | null
  completed_at: string | null
}

export function DynamicRoadmap() {
  const [items, setItems] = useState<RoadmapItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchRoadmap()
  }, [])

  const fetchRoadmap = async () => {
    try {
      const response = await fetch("/api/roadmap")
      if (!response.ok) {
        throw new Error(`Failed to fetch roadmap: ${response.statusText}`)
      }
      const data = await response.json()
      setItems(data.items || [])
    } catch (error) {
      console.error("[v0] Error fetching roadmap:", error)
      setItems([])
    } finally {
      setLoading(false)
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 className="w-5 h-5 text-teal" />
      case "in-progress":
        return <Clock className="w-5 h-5 text-gold" />
      default:
        return <Circle className="w-5 h-5 text-muted-foreground" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-teal/10 text-teal border-teal/20"
      case "in-progress":
        return "bg-gold/10 text-gold border-gold/20"
      default:
        return "bg-muted text-muted-foreground border-border"
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "foundation":
        return "border-teal/20"
      case "growth":
        return "border-violet/20"
      case "legacy":
        return "border-gold/20"
      default:
        return "border-border/50"
    }
  }

  const groupedItems = items.reduce(
    (acc, item) => {
      if (!acc[item.category]) acc[item.category] = []
      acc[item.category].push(item)
      return acc
    },
    {} as Record<string, RoadmapItem[]>,
  )

  if (loading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-32 bg-charcoal/50 animate-pulse rounded-lg" />
        ))}
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <Card className="bg-card/50 backdrop-blur border-border/50">
        <CardContent className="py-12 text-center text-muted-foreground">
          <p>Roadmap items will appear here once they're added to the system.</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-8">
      {Object.entries(groupedItems).map(([category, categoryItems]) => (
        <div key={category}>
          <h3 className="text-xl font-semibold mb-4 capitalize">{category} Phase</h3>
          <div className="space-y-4">
            {categoryItems.map((item) => (
              <Card key={item.id} className={`bg-card/50 backdrop-blur ${getCategoryColor(item.category)}`}>
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        {getStatusIcon(item.status)}
                        <CardTitle className="text-lg">{item.title}</CardTitle>
                        <Badge variant="outline" className={getStatusColor(item.status)}>
                          {item.status.replace("-", " ")}
                        </Badge>
                      </div>
                      {item.description && <CardDescription>{item.description}</CardDescription>}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium">{item.progress}%</span>
                    </div>
                    <Progress value={item.progress} className="h-2" />
                  </div>

                  {item.target_date && (
                    <p className="text-sm text-muted-foreground">
                      Target: {new Date(item.target_date).toLocaleDateString()}
                    </p>
                  )}

                  {item.completed_at && (
                    <p className="text-sm text-teal">Completed: {new Date(item.completed_at).toLocaleDateString()}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
