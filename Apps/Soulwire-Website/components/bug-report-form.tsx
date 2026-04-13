"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bug, CheckCircle, Loader2 } from "lucide-react"

export function BugReportForm() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSuccess(false)

    try {
      const response = await fetch("/api/github/issues", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          body: description,
          labels: ["bug", "from-website"],
        }),
      })

      if (!response.ok) throw new Error("Failed to submit bug report")

      setSuccess(true)
      setTitle("")
      setDescription("")
    } catch (err) {
      setError("Failed to submit bug report. Please try again.")
      console.error("[v0] Bug report error:", err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="border-gold/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bug className="w-5 h-5 text-gold" />
          Report a Bug
        </CardTitle>
        <CardDescription>Found something broken? Let us know and we'll track it on GitHub.</CardDescription>
      </CardHeader>
      <CardContent>
        {success ? (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <CheckCircle className="w-12 h-12 text-teal mb-4" />
            <h3 className="font-semibold text-lg mb-2">Bug Report Submitted!</h3>
            <p className="text-muted-foreground text-sm mb-4">
              We've created a GitHub issue to track this bug. You'll see it appear in our activity feed shortly.
            </p>
            <Button onClick={() => setSuccess(false)} variant="outline">
              Report Another Bug
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="bug-title">Bug Title</Label>
              <Input
                id="bug-title"
                placeholder="Brief description of the issue"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="bug-description">Description</Label>
              <Textarea
                id="bug-description"
                placeholder="What happened? What did you expect to happen? Steps to reproduce..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={6}
                required
              />
            </div>

            {error && <p className="text-sm text-red-500">{error}</p>}

            <Button type="submit" disabled={loading} className="w-full">
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Bug className="w-4 h-4 mr-2" />
                  Submit Bug Report
                </>
              )}
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  )
}
