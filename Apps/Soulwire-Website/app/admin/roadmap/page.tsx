import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Plus, Edit, Trash2, Check } from "lucide-react"

export default async function AdminRoadmapPage() {
  const cookieStore = await cookies()
  const isAuthenticated = cookieStore.get("admin_auth")?.value === "true"

  if (!isAuthenticated) {
    redirect("/admin/login")
  }

  const supabase = await createClient()

  const { data: roadmapItems, error } = await supabase
    .from("roadmap_items")
    .select("*")
    .order("phase", { ascending: true })
    .order("order_index", { ascending: true })

  return (
    <div className="min-h-screen bg-background">
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
              <h1 className="text-2xl font-bold">Roadmap Management</h1>
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              <Plus className="w-4 h-4 mr-2" />
              Add Milestone
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto space-y-6">
          {error && (
            <Card className="bg-destructive/10 border-destructive/20">
              <CardContent className="pt-6">
                <p className="text-destructive">Error loading roadmap: {error.message}</p>
              </CardContent>
            </Card>
          )}

          {roadmapItems && roadmapItems.length === 0 && (
            <Card>
              <CardContent className="pt-12 pb-12 text-center">
                <p className="text-muted-foreground mb-4">No roadmap items yet</p>
                <Button>Add your first milestone</Button>
              </CardContent>
            </Card>
          )}

          {/* Group by phase */}
          {roadmapItems &&
            ["Foundation", "Growth", "Legacy"].map((phase) => {
              const phaseItems = roadmapItems.filter((item) => item.phase === phase)
              if (phaseItems.length === 0) return null

              return (
                <div key={phase} className="space-y-4">
                  <div className="flex items-center gap-3">
                    <h2 className="text-2xl font-bold">{phase}</h2>
                    <Badge variant="outline">{phaseItems.length} items</Badge>
                  </div>

                  <div className="space-y-3">
                    {phaseItems.map((item) => (
                      <Card key={item.id} className="group hover:border-primary/30 transition-all">
                        <CardHeader>
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-3">
                                <Badge
                                  variant={
                                    item.status === "completed"
                                      ? "default"
                                      : item.status === "in-progress"
                                        ? "secondary"
                                        : "outline"
                                  }
                                >
                                  {item.status === "completed" && <Check className="w-3 h-3 mr-1" />}
                                  {item.status}
                                </Badge>
                                <span className="text-sm text-muted-foreground">
                                  {item.percentage_complete}% complete
                                </span>
                              </div>
                              <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
                              <CardDescription>{item.description}</CardDescription>
                            </div>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm">
                                <Edit className="w-4 h-4" />
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
                </div>
              )
            })}
        </div>
      </main>
    </div>
  )
}
