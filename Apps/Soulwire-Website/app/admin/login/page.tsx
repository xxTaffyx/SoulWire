"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Shield } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function AdminLoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError("")
    setLoading(true)

    console.log("[v0] Login attempt for:", email)

    try {
      const emailLower = email.toLowerCase().trim()

      if (emailLower === "xxtaffyx@gmail.com" && password === "Michelle343!") {
        console.log("[v0] Hardcoded admin login successful")
        document.cookie = "admin_auth=true; path=/; max-age=86400; SameSite=Lax"
        document.cookie = `admin_email=${emailLower}; path=/; max-age=86400; SameSite=Lax`

        // Small delay to ensure cookies are set
        setTimeout(() => {
          window.location.href = "/admin/dashboard"
        }, 100)
        return
      }

      const adminAccounts = JSON.parse(localStorage.getItem("admin_accounts") || "{}")
      console.log("[v0] Checking localStorage accounts")

      if (adminAccounts[emailLower] && adminAccounts[emailLower] === password) {
        console.log("[v0] localStorage admin login successful")
        document.cookie = "admin_auth=true; path=/; max-age=86400; SameSite=Lax"
        document.cookie = `admin_email=${emailLower}; path=/; max-age=86400; SameSite=Lax`

        // Small delay to ensure cookies are set
        setTimeout(() => {
          window.location.href = "/admin/dashboard"
        }, 100)
      } else {
        console.log("[v0] Login failed - invalid credentials")
        setError("Invalid email or password")
        setLoading(false)
      }
    } catch (err) {
      console.error("[v0] Login error:", err)
      setError("Login failed. Please try again.")
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center p-6 bg-background">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
            <Shield className="w-6 h-6 text-primary" />
          </div>
          <CardTitle className="text-2xl">SoulWire Admin</CardTitle>
          <CardDescription>Sign in to access the dashboard</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={loading}
              />
            </div>
            {error && (
              <div className="p-3 rounded bg-destructive/10 border border-destructive/20 text-destructive text-sm">
                {error}
              </div>
            )}
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Signing in..." : "Sign In"}
            </Button>
            <p className="text-center text-sm text-muted-foreground">
              Need an account?{" "}
              <Link href="/admin/signup" className="text-primary hover:underline">
                Sign up
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
