import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Map, FileText, Users, LogOut, Activity, GitCommit } from "lucide-react"
import { createClient } from "@/lib/supabase/server"

export default async function AdminDashboardPage() {
  const cookieStore = await cookies()
  const isAuthenticated = cookieStore.get("admin_auth")?.value === "true"
  const adminEmail = cookieStore.get("admin_email")?.value

  if (!isAuthenticated || !adminEmail) {
    redirect("/admin/login")
  }

  const supabase = await createClient()

  // Get journal post count (static for now, can be made dynamic later)
  const journalCount = 3

  // Get admin users count
  const { count: adminCount } = await supabase.from("admin_users").select("*", { count: "exact", head: true })

  // Get GitHub activity count
  const { count: githubActivityCount } = await supabase
    .from("github_activity")
    .select("*", { count: "exact", head: true })

  // Get roadmap items count
  const { count: roadmapCount } = await supabase.from("roadmap_items").select("*", { count: "exact", head: true })

  // Calculate days into journey
  const journeyStartDate = new Date("2024-12-01")
  const daysIntoJourney = Math.floor((Date.now() - journeyStartDate.getTime()) / (1000 * 60 * 60 * 24))
  const daysRemaining = 10950 - daysIntoJourney // 30 years = 10,950 days
  // </CHANGE>

  const sections = [
    {
      title: "Journal Entries",
      description: "Create, edit, and publish journal posts",
      icon: BookOpen,
      href: "/admin/journal",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      title: "Admin Users",
      description: "Manage admin email whitelist",
      icon: Users,
      href: "/admin/users",
      color: "text-ember-gold",
      bgColor: "bg-ember-gold/10",
    },
    {
      title: "Roadmap Items",
      description: "Manage roadmap milestones and progress",
      icon: Map,
      href: "/admin/roadmap",
      color: "text-guardian-violet",
      bgColor: "bg-guardian-violet/10",
    },
    {
      title: "Content Pages",
      description: "Edit website content and copy",
      icon: FileText,
      href: "/admin/content",
      color: "text-sky-blue",
      bgColor: "bg-sky-blue/10",
    },
  ]

  const handleSignOut = async () => {
    "use server"
    const cookieStore = await cookies()
    cookieStore.delete("admin_auth")
    cookieStore.delete("admin_email")
    redirect("/admin/login")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-card/50 backdrop-blur">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <span className="text-primary font-bold text-xl">🕯</span>
            </div>
            <div>
              <h1 className="text-xl font-semibold">SoulWire Admin</h1>
              <p className="text-sm text-muted-foreground">Welcome back, {adminEmail}</p>
            </div>
          </div>
          <form action={handleSignOut}>
            <Button variant="outline" size="sm">
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </form>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Welcome Section */}
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Dashboard</h2>
            <p className="text-muted-foreground">Manage all aspects of the SoulWire website from one place</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Journal Posts</p>
                    <p className="text-3xl font-bold text-primary">{journalCount}</p>
                  </div>
                  <BookOpen className="w-10 h-10 text-primary opacity-20" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-ember-gold/10 to-ember-gold/5 border-ember-gold/20">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Admin Users</p>
                    <p className="text-3xl font-bold text-ember-gold">{adminCount || 1}</p>
                  </div>
                  <Users className="w-10 h-10 text-ember-gold opacity-20" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-guardian-violet/10 to-guardian-violet/5 border-guardian-violet/20">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Roadmap Items</p>
                    <p className="text-3xl font-bold text-guardian-violet">{roadmapCount || 0}</p>
                  </div>
                  <Map className="w-10 h-10 text-guardian-violet opacity-20" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-sky-blue/10 to-sky-blue/5 border-sky-blue/20">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">GitHub Activity</p>
                    <p className="text-3xl font-bold text-sky-blue">{githubActivityCount || 0}</p>
                  </div>
                  <GitCommit className="w-10 h-10 text-sky-blue opacity-20" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Journey Progress */}
          <Card className="border-primary/30 bg-gradient-to-r from-card to-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-primary" />
                30-Year Journey Progress
              </CardTitle>
              <CardDescription>Building the cathedral, one day at a time</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 rounded-lg bg-background/50">
                  <p className="text-sm text-muted-foreground mb-1">Days Completed</p>
                  <p className="text-4xl font-bold text-primary">{daysIntoJourney}</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-background/50">
                  <p className="text-sm text-muted-foreground mb-1">Days Remaining</p>
                  <p className="text-4xl font-bold text-ember-gold">{daysRemaining.toLocaleString()}</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-background/50">
                  <p className="text-sm text-muted-foreground mb-1">Progress</p>
                  <p className="text-4xl font-bold text-guardian-violet">
                    {((daysIntoJourney / 10950) * 100).toFixed(2)}%
                  </p>
                </div>
              </div>
              <div className="w-full bg-background/50 rounded-full h-3 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary via-ember-gold to-guardian-violet rounded-full transition-all duration-1000"
                  style={{ width: `${(daysIntoJourney / 10950) * 100}%` }}
                />
              </div>
            </CardContent>
          </Card>
          {/* </CHANGE> */}

          {/* Quick Actions Grid */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Management Sections</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {sections.map((section) => (
                <Link key={section.href} href={section.href}>
                  <Card className="group hover:border-primary/30 transition-all h-full cursor-pointer">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className={`p-3 rounded-lg ${section.bgColor}`}>
                          <section.icon className={`w-6 h-6 ${section.color}`} />
                        </div>
                      </div>
                      <CardTitle className="group-hover:text-primary transition-colors">{section.title}</CardTitle>
                      <CardDescription>{section.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
