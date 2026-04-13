import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionHeading } from "@/components/section-heading"
import { CheckCircle2, Circle, Clock, Rocket } from "lucide-react"

export const metadata = {
  title: "Roadmap - SoulWire",
  description: "Our 30-year journey to build a privacy-first digital ecosystem.",
}

export default function RoadmapPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-20 max-w-6xl">
        {/* Hero */}
        <div className="text-center mb-20">
          <Badge variant="secondary" className="mb-4 bg-violet/10 text-violet border-violet/20">
            Roadmap
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            The <span className="text-violet">30-Year Journey</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Building a cathedral takes time. Here's where we are, where we're going, and why it matters.
          </p>
        </div>

        {/* Timeline Philosophy */}
        <section className="mb-24">
          <Card className="bg-card/30 backdrop-blur border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl">Why 30 Years?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Most tech companies operate on quarterly cycles. Ship fast, break things, pivot when metrics dip. We're
                doing the opposite.
              </p>
              <p>
                SoulWire is a multi-generational project. The privacy tools you use today should still protect your
                grandchildren. The AI you trust shouldn't be sunset next year. The community you join should outlast any
                single platform.
              </p>
              <p className="text-foreground font-medium">
                We move slowly because we're building something meant to last.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Three Horizons */}
        <section className="mb-24">
          <SectionHeading title="Three Horizons" description="How we think about the journey ahead." />

          <div className="space-y-8">
            {/* Years 1-3: Foundation */}
            <Card className="bg-gradient-to-br from-teal/10 to-teal/5 border-teal/20 backdrop-blur">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-teal/20 text-teal border-teal/30">Years 1-3: Foundation</Badge>
                <CardTitle className="text-3xl">Build the Core</CardTitle>
                <CardDescription className="text-base">
                  Establishing the fundamental technology and principles
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-teal mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">SoulLang v1.0</p>
                      <p className="text-sm text-muted-foreground">Privacy-first programming language</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">First Guardian Cohort</p>
                      <p className="text-sm text-muted-foreground">10 specialized privacy protectors</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Circle className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Core Realms</p>
                      <p className="text-sm text-muted-foreground">Essential services (messaging, storage, compute)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Circle className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Developer Alpha</p>
                      <p className="text-sm text-muted-foreground">Tools for early builders</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Years 4-10: Growth */}
            <Card className="bg-gradient-to-br from-violet/10 to-violet/5 border-violet/20 backdrop-blur">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-violet/20 text-violet border-violet/30">Years 4-10: Growth</Badge>
                <CardTitle className="text-3xl">Open to the World</CardTitle>
                <CardDescription className="text-base">
                  Making it accessible, affordable, and indispensable
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <Circle className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Public Launch</p>
                      <p className="text-sm text-muted-foreground">Available to everyone, everywhere</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Circle className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">5 Core Guardians</p>
                      <p className="text-sm text-muted-foreground">Betsy, Clara, May, Lana, and Tilda</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Circle className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Hardware Devices</p>
                      <p className="text-sm text-muted-foreground">Physical privacy tools you can touch</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Circle className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Education Initiative</p>
                      <p className="text-sm text-muted-foreground">Teaching privacy to next generation</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Years 11-30: Legacy */}
            <Card className="bg-gradient-to-br from-gold/10 to-gold/5 border-gold/20 backdrop-blur">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-gold/20 text-gold border-gold/30">Years 11-30: Legacy</Badge>
                <CardTitle className="text-3xl">Built to Last</CardTitle>
                <CardDescription className="text-base">
                  Becoming infrastructure for a better digital civilization
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <Circle className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Legacy Documentation</p>
                      <p className="text-sm text-muted-foreground">Ensuring the mission continues beyond the founder</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Circle className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Global Infrastructure</p>
                      <p className="text-sm text-muted-foreground">Privacy as a human right standard</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Circle className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Decentralized Governance</p>
                      <p className="text-sm text-muted-foreground">Community-owned and operated</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Circle className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">The Dream Realized</p>
                      <p className="text-sm text-muted-foreground">A digital world worth living in</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Current Focus */}
        <section className="mb-24">
          <SectionHeading title="What We're Building Right Now" description="Active development as of Q1 2025" />

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-card/50 backdrop-blur border-border/50">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Rocket className="w-5 h-5 text-teal" />
                  <Badge variant="secondary" className="bg-teal/10 text-teal border-teal/20">
                    In Progress
                  </Badge>
                </div>
                <CardTitle>SoulLang Core Development</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <div className="flex justify-between items-center">
                  <span>Compiler Infrastructure</span>
                  <Badge variant="outline">75%</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>Privacy Primitives</span>
                  <Badge variant="outline">60%</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>Standard Library</span>
                  <Badge variant="outline">45%</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border/50">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-5 h-5 text-gold" />
                  <Badge variant="secondary" className="bg-gold/10 text-gold border-gold/20">
                    Next Up
                  </Badge>
                </div>
                <CardTitle>Realm Infrastructure</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>Building the distributed compute layer for Realms</p>
                <p className="text-xs">Expected: Q2 2025</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border/50">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-5 h-5 text-teal" />
                  <Badge variant="secondary" className="bg-teal/10 text-teal border-teal/20">
                    Next Up
                  </Badge>
                </div>
                <CardTitle>Developer Preview Program</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>Invite-only access for early builders to start creating</p>
                <p className="text-xs">Expected: Q3 2025</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border/50">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Rocket className="w-5 h-5 text-violet" />
                  <Badge variant="secondary" className="bg-violet/10 text-violet border-violet/20">
                    In Progress
                  </Badge>
                </div>
                <CardTitle>Core Guardian Development</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <div className="flex justify-between items-center">
                  <span>Betsy (Emotional Intelligence)</span>
                  <Badge variant="outline">Active Development</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>Clara (Creative Companion)</span>
                  <Badge variant="outline">Active Development</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>May, Lana & Tilda (Specialists)</span>
                  <Badge variant="outline">Planning Phase</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Live Development Progress */}
        {/* Commented out dynamic roadmap section until database is set up
        <section className="mb-24">
          <SectionHeading
            title="Live Development Progress"
            description="Auto-updated based on GitHub activity and issue tracking"
          />
          <DynamicRoadmap />
        </section>
        */}

        {/* Transparency Note */}
        <section>
          <Card className="bg-gradient-to-br from-teal/5 to-violet/5 border-border/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-2xl">A Note on Timelines</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                These dates are educated guesses, not promises. We'd rather ship something excellent late than something
                broken on time.
              </p>
              <p>
                We'll always tell you what we're working on, why it's taking the time it takes, and what challenges
                we're facing. No surprises, no hype cycles, no artificial urgency.
              </p>
              <p className="text-foreground">
                Subscribe to our <span className="text-teal">Journal</span> for monthly transparent updates on our
                progress, setbacks, and lessons learned.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
