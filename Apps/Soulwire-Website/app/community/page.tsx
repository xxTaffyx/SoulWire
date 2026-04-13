import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SectionHeading } from "@/components/section-heading"
import { MessageSquare, Github, Users, Heart, Calendar, BookOpen } from "lucide-react"

export const metadata = {
  title: "Community - SoulWire",
  description: "Join the SoulWire community building a better digital future together.",
}

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-20 max-w-6xl">
        {/* Hero */}
        <div className="text-center mb-20">
          <Badge variant="secondary" className="mb-4 bg-teal/10 text-teal border-teal/20">
            Community
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Build the Future <span className="text-teal">Together</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Join thousands of builders, thinkers, and dreamers creating a digital world worth living in.
          </p>
        </div>

        {/* Ways to Participate */}
        <section className="mb-24">
          <SectionHeading title="Get Involved" description="Every contribution matters, from code to conversation." />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-card/50 backdrop-blur border-border/50 hover:border-teal/30 transition-all">
              <CardHeader>
                <Github className="w-10 h-10 text-teal mb-2" />
                <CardTitle>Open Source</CardTitle>
                <CardDescription>Contribute code, review PRs, or help with documentation</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-transparent" variant="outline" asChild>
                  <Link href="https://github.com/xxTaffyx/SoulWire" target="_blank">
                    View Repositories
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border/50 hover:border-violet/30 transition-all">
              <CardHeader>
                <MessageSquare className="w-10 h-10 text-violet mb-2" />
                <CardTitle>Discussions</CardTitle>
                <CardDescription>Share ideas, ask questions, and help others</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-transparent" variant="outline" asChild>
                  <Link href="/journal">Join Discussions</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border/50 hover:border-gold/30 transition-all">
              <CardHeader>
                <Calendar className="w-10 h-10 text-gold mb-2" />
                <CardTitle>Events</CardTitle>
                <CardDescription>Join virtual meetups, workshops, and builder sessions</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-transparent" variant="outline" asChild>
                  <Link href="/roadmap">View Roadmap</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border/50 hover:border-teal/30 transition-all">
              <CardHeader>
                <BookOpen className="w-10 h-10 text-teal mb-2" />
                <CardTitle>Content Creation</CardTitle>
                <CardDescription>Write tutorials, create videos, or share your journey</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-transparent" variant="outline" asChild>
                  <Link href="/journal">Read Stories</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border/50 hover:border-violet/30 transition-all">
              <CardHeader>
                <Users className="w-10 h-10 text-violet mb-2" />
                <CardTitle>Local Chapters</CardTitle>
                <CardDescription>Start or join a SoulWire community in your city</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-transparent" variant="outline" asChild>
                  <Link href="/community">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border/50 hover:border-gold/30 transition-all">
              <CardHeader>
                <Heart className="w-10 h-10 text-gold mb-2" />
                <CardTitle>Support Others</CardTitle>
                <CardDescription>Help newcomers, mentor builders, or sponsor access</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-transparent" variant="outline" asChild>
                  <Link href="/support#heroes">Heroes Program</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Community Principles */}
        <section className="mb-24">
          <SectionHeading title="Our Principles" description="What guides how we work together." />

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card/30 backdrop-blur border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">Kindness First</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  We default to assuming good intentions. Everyone is here because they care about building something
                  better.
                </p>
                <p>
                  Disagree with respect. Challenge ideas, not people. Remember that behind every screen is a human
                  being.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/30 backdrop-blur border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">No Dark Patterns</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  No manipulation, no artificial urgency, no engagement hacks. Just genuine connection and
                  collaboration.
                </p>
                <p>We measure success by depth of relationships, not vanity metrics.</p>
              </CardContent>
            </Card>

            <Card className="bg-card/30 backdrop-blur border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">Long-Term Thinking</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>We're building for 30 years, not 30 days. Slow and thoughtful beats fast and broken.</p>
                <p>Take your time. Ask questions. There's no rush to ship when you're building a cathedral.</p>
              </CardContent>
            </Card>

            <Card className="bg-card/30 backdrop-blur border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">Radical Transparency</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>All discussions are public by default. All code is open source. All decisions are documented.</p>
                <p>We have nothing to hide and everything to share.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Join CTA */}
        <section className="text-center">
          <Card className="bg-gradient-to-br from-teal/10 to-violet/10 border-teal/20 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-3xl mb-4">Ready to Build Together?</CardTitle>
              <CardDescription className="text-lg">
                The future needs your perspective, your skills, and your heart.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-teal hover:bg-teal/90" asChild>
                <Link href="https://github.com/xxTaffyx/SoulWire" target="_blank">
                  Start Contributing
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/support">Support the Project</Link>
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
