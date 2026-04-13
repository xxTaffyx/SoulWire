import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Plus, Edit, Trash2 } from "lucide-react"

export default async function AdminJournalPage() {
  const cookieStore = await cookies()
  const isAuthenticated = cookieStore.get("admin_auth")?.value === "true"

  if (!isAuthenticated) {
    redirect("/admin/login")
  }

  const supabase = await createClient()

  // Fetch journal entries
  const { data: entries, error: entriesError } = await supabase
    .from("journal_entries")
    .select("*")
    .order("created_at", { ascending: false })

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-card/50 backdrop-blur sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button asChild variant="ghost" size="sm">
                <Link href="/admin/dashboard">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Dashboard
                </Link>
              </Button>
              <h1 className="text-2xl font-bold">Journal Entries</h1>
            </div>
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link href="/admin/journal/new">
                <Plus className="w-4 h-4 mr-2" />
                New Entry
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto space-y-6">
          {entriesError && (
            <Card className="bg-destructive/10 border-destructive/20">
              <CardContent className="pt-6">
                <p className="text-destructive">Error loading entries: {entriesError.message}</p>
              </CardContent>
            </Card>
          )}

          {entries && entries.length === 0 && (
            <Card>
              <CardContent className="pt-12 pb-12 text-center">
                <p className="text-muted-foreground mb-4">No journal entries yet</p>
                <Button asChild>
                  <Link href="/admin/journal/new">Create your first entry</Link>
                </Button>
              </CardContent>
            </Card>
          )}

          {entries &&
            entries.map((entry) => (
              <Card key={entry.id} className="group hover:border-primary/30 transition-all">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge variant={entry.is_published ? "default" : "secondary"}>
                          {entry.is_published ? "Published" : "Draft"}
                        </Badge>
                        <Badge variant="outline">{entry.category}</Badge>
                        <span className="text-sm text-muted-foreground">
                          {new Date(entry.created_at).toLocaleDateString()}
                        </span>
                      </div>
                      <CardTitle className="text-xl mb-2">{entry.title}</CardTitle>
                      <CardDescription>{entry.excerpt}</CardDescription>
                    </div>
                    <div className="flex gap-2">
                      <Button asChild variant="outline" size="sm">
                        <Link href={`/admin/journal/edit/${entry.id}`}>
                          <Edit className="w-4 h-4" />
                        </Link>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-destructive hover:text-destructive bg-transparent"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
        </div>
      </main>
    </div>
  )
}
