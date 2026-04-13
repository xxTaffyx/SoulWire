"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    // Simulate API call
    setTimeout(() => {
      setStatus("success")
      setEmail("")
      setTimeout(() => setStatus("idle"), 5000)
    }, 1000)
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        <Input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1 bg-card border-border text-foreground placeholder:text-muted-foreground"
          disabled={status === "loading" || status === "success"}
        />
        <Button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className="bg-primary hover:bg-primary/90 text-primary-foreground whitespace-nowrap"
        >
          {status === "loading" ? "Joining..." : status === "success" ? "Welcome!" : "Join the Journey"}
        </Button>
      </div>
      {status === "success" && (
        <p className="text-sm text-forest-green mt-2 text-center">Welcome to the journey! Check your inbox.</p>
      )}
      <p className="text-xs text-muted-foreground mt-2 text-center">
        We&apos;ll never share your email. Monthly updates only. Unsubscribe anytime.
      </p>
    </form>
  )
}
