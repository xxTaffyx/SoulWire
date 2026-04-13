import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionHeading } from "@/components/section-heading"
import { Calendar, User, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NewsletterForm } from "@/components/newsletter-form"
import { GitHubActivityFeed } from "@/components/github-activity-feed"
import { BugReportForm } from "@/components/bug-report-form"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata = {
  title: "Journal - SoulWire",
  description: "Monthly transparent updates from the SoulWire team on our 30-year journey.",
}

// Sample journal entries - in production, these would come from a CMS or database
const journalEntries = [
  {
    id: "jan-2025-foundations",
    title: "January 2025: Laying Foundations",
    date: "2025-01-15",
    author: "SoulWire Team",
    category: "Monthly Update",
    excerpt:
      "Our first month of the 30-year journey. What we've built, what we've learned, and what's keeping us up at night.",
    readTime: "8 min read",
  },
  {
    id: "dec-2024-beginnings",
    title: "December 2024: The Beginning",
    date: "2024-12-20",
    author: "SoulWire Team",
    category: "Vision",
    excerpt: "Why we're building SoulWire, what makes it different, and why we think the world needs this right now.",
    readTime: "12 min read",
  },
  {
    id: "soullang-design-philosophy",
    title: "SoulLang Design Philosophy: Privacy by Default",
    date: "2024-12-10",
    author: "Engineering Team",
    category: "Technical Deep Dive",
    excerpt: "How we're rethinking programming language design to make privacy the path of least resistance.",
    readTime: "15 min read",
  },
]

export default function JournalPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-20 max-w-6xl">
        {/* Hero */}
        <div className="text-center mb-20">
          <Badge variant="secondary" className="mb-4 bg-gold/10 text-gold border-gold/20">
            Journal
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Building in <span className="text-gold">Public</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Monthly transparent updates on our progress, challenges, and lessons learned on the 30-year journey.
          </p>
        </div>

        {/* What is This Section */}
        <section className="mb-16">
          <Card className="bg-card/30 backdrop-blur border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl">What is the Journal?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Every month, we publish a completely honest update about what we're building, what's working, what
                isn't, and what we're learning along the way.
              </p>
              <p>No marketing speak. No inflated metrics. No pretending everything is perfect.</p>
              <p className="text-foreground">
                Just the real story of what it takes to build a privacy-first digital ecosystem that's meant to last 30
                years.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16">
          <Tabs defaultValue="journal" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="journal">Journal</TabsTrigger>
              <TabsTrigger value="activity">Live Activity</TabsTrigger>
              <TabsTrigger value="report">Report Bug</TabsTrigger>
            </TabsList>

            <TabsContent value="journal">
              <SectionHeading title="Latest Updates" description="The most recent chapters of our journey." />

              <div className="space-y-6">
                {journalEntries.map((entry) => (
                  <Card
                    key={entry.id}
                    className="bg-card/50 backdrop-blur border-border/50 hover:border-teal/30 transition-all group"
                  >
                    <CardHeader>
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <Badge variant="secondary" className="bg-teal/10 text-teal border-teal/20">
                          {entry.category}
                        </Badge>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <time dateTime={entry.date}>{new Date(entry.date).toLocaleDateString()}</time>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <User className="w-4 h-4" />
                          <span>{entry.author}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{entry.readTime}</span>
                      </div>
                      <CardTitle className="text-2xl group-hover:text-teal transition-colors">
                        <Link href={`/journal/${entry.id}`}>{entry.title}</Link>
                      </CardTitle>
                      <CardDescription className="text-base">{entry.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="ghost" className="group-hover:text-teal transition-colors" asChild>
                        <Link href={`/journal/${entry.id}`}>
                          Read full update
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="activity">
              <SectionHeading
                title="Live Development Activity"
                description="Real-time updates from our GitHub repository showing commits, releases, and bug fixes."
              />
              <GitHubActivityFeed />
            </TabsContent>

            <TabsContent value="report">
              <div className="max-w-2xl mx-auto">
                <BugReportForm />
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Categories */}
        <section className="mb-16">
          <SectionHeading title="Browse by Topic" description="Find what you're looking for." />

          <div className="grid md:grid-cols-3 gap-4">
            <Card className="bg-card/50 backdrop-blur border-border/50 hover:border-teal/30 transition-all h-full">
              <CardHeader>
                <CardTitle className="text-lg">Monthly Updates</CardTitle>
                <CardDescription>Regular progress reports on the entire project</CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border/50 hover:border-violet/30 transition-all h-full">
              <CardHeader>
                <CardTitle className="text-lg">Technical Deep Dives</CardTitle>
                <CardDescription>How we're solving hard engineering problems</CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border/50 hover:border-gold/30 transition-all h-full">
              <CardHeader>
                <CardTitle className="text-lg">Vision & Philosophy</CardTitle>
                <CardDescription>Why we're building and what guides our decisions</CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border/50 hover:border-teal/30 transition-all h-full">
              <CardHeader>
                <CardTitle className="text-lg">Community Stories</CardTitle>
                <CardDescription>Featuring builders and contributors</CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border/50 hover:border-violet/30 transition-all h-full">
              <CardHeader>
                <CardTitle className="text-lg">Lessons Learned</CardTitle>
                <CardDescription>What we got wrong and what we'd do differently</CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border/50 hover:border-gold/30 transition-all h-full">
              <CardHeader>
                <CardTitle className="text-lg">Roadmap Updates</CardTitle>
                <CardDescription>Timeline changes and milestone achievements</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Subscribe CTA */}
        <section>
          <Card className="bg-gradient-to-br from-gold/10 to-teal/10 border-gold/20 backdrop-blur">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl mb-4">Never Miss an Update</CardTitle>
              <CardDescription className="text-lg">
                Get our monthly journal entries delivered to your inbox. No spam, no marketing, just honest updates.
              </CardDescription>
            </CardHeader>
            <CardContent className="max-w-md mx-auto">
              <NewsletterForm />
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
