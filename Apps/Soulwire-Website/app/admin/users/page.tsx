import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowLeft, UserPlus, Trash2, Shield } from "lucide-react"

export default async function AdminUsersPage() {
  const cookieStore = await cookies()
  const isAuthenticated = cookieStore.get("admin_auth")?.value === "true"
  const adminEmail = cookieStore.get("admin_email")?.value

  if (!isAuthenticated || !adminEmail) {
    redirect("/admin/login")
  }

  const supabase = await createClient()

  // Fetch all whitelisted admin emails
  const { data: adminUsers, error: adminError } = await supabase
    .from("admin_users")
    .select("*")
    .order("created_at", { ascending: true })

  const handleAddAdmin = async (formData: FormData) => {
    "use server"
    const supabase = await createClient()
    const email = formData.get("email") as string
    const cookieStore = await cookies()
    const adminEmail = cookieStore.get("admin_email")?.value

    if (!email || !email.includes("@")) {
      return
    }

    await supabase.from("admin_users").insert({
      email: email.toLowerCase().trim(),
      added_by: adminEmail,
    })

    redirect("/admin/users")
  }

  const handleRemoveAdmin = async (formData: FormData) => {
    "use server"
    const supabase = await createClient()
    const email = formData.get("email") as string

    if (email === "xxtaffyx@gmail.com") {
      return
    }

    await supabase.from("admin_users").delete().eq("email", email)

    redirect("/admin/users")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-card/50 backdrop-blur">
        <div className="container mx-auto px-4 py-4">
          <Link href="/admin/dashboard">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Admin Email Whitelist</h1>
            <p className="text-muted-foreground">
              Manage who can create admin accounts. Only emails on this list can sign up for admin access.
            </p>
          </div>

          {/* Add New Admin Email */}
          <Card>
            <CardHeader>
              <CardTitle>Add Email to Whitelist</CardTitle>
              <CardDescription>Enter the email address of someone you trust to be an admin</CardDescription>
            </CardHeader>
            <CardContent>
              <form action={handleAddAdmin} className="flex gap-4">
                <Input type="email" name="email" placeholder="friend@example.com" required className="flex-1" />
                <Button type="submit">
                  <UserPlus className="w-4 h-4 mr-2" />
                  Add Email
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Whitelist */}
          <Card>
            <CardHeader>
              <CardTitle>Whitelisted Emails ({adminUsers?.length || 0})</CardTitle>
              <CardDescription>Emails that can create admin accounts at /admin/signup</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {adminUsers && adminUsers.length > 0 ? (
                  adminUsers.map((admin) => {
                    const isHeadAdmin = admin.email === "xxtaffyx@gmail.com"
                    return (
                      <div
                        key={admin.id}
                        className="flex items-center justify-between p-4 rounded-lg border border-border/50 bg-card/50"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <Shield className={`w-5 h-5 ${isHeadAdmin ? "text-ember-gold" : "text-primary"}`} />
                          </div>
                          <div>
                            <p className="font-medium flex items-center gap-2">
                              {admin.email}
                              {isHeadAdmin && (
                                <span className="text-xs px-2 py-0.5 rounded-full bg-ember-gold/20 text-ember-gold border border-ember-gold/30">
                                  Head Admin (Hardcoded)
                                </span>
                              )}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              Added {new Date(admin.created_at).toLocaleDateString()}
                              {admin.added_by && ` by ${admin.added_by}`}
                            </p>
                          </div>
                        </div>
                        {!isHeadAdmin && (
                          <form action={handleRemoveAdmin}>
                            <input type="hidden" name="email" value={admin.email} />
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-red-500 hover:text-red-600 hover:bg-red-500/10"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </form>
                        )}
                      </div>
                    )
                  })
                ) : (
                  <p className="text-center text-muted-foreground py-8">No whitelisted emails yet</p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Info Note */}
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">How it works:</strong> When you add an email here, that person can
                go to <code className="px-2 py-1 rounded bg-card text-primary">/admin/signup</code> and create their
                admin account. If their email isn't on this list, they won't be able to sign up. Your email (
                {adminEmail}) is hardcoded and always has access.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
