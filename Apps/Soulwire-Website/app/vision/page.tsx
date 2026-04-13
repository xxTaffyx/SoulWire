import Link from "next/link"
import { Lock, Ban, Eye, Wind, Users, Unlock, ArrowRight, Building2, Shield, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeading } from "@/components/section-heading"

export default function VisionPage() {
  const principles = [
    {
      icon: Lock,
      title: "Local-First",
      description: "Your data lives on YOUR device first.",
      detail: "Everything works offline. Your information stays with you, synced only when you choose.",
    },
    {
      icon: Ban,
      title: "No Ads, Ever",
      description: "We don't sell your attention. Period.",
      detail: "No banners, no interruptions, no tracking pixels. Just pure functionality.",
    },
    {
      icon: Eye,
      title: "Transparent",
      description: "Plain-language policies. You see everything.",
      detail: "No legalese, no hidden clauses. We explain what we do in words everyone can understand.",
    },
    {
      icon: Wind,
      title: "Calm Design",
      description: "Low-stimulation. No manipulation.",
      detail: "No dark patterns, no infinite scroll, no notification addiction. Technology that respects your peace.",
    },
    {
      icon: Users,
      title: "All-Life Design",
      description: "From babies to elders, everyone matters.",
      detail: "Not just for tech-savvy millennials. Built for every generation, every ability, every human.",
    },
    {
      icon: Unlock,
      title: "True Independence",
      description: "No corporate dependencies. We build it all.",
      detail: "From programming language to hardware, we control our destiny and yours.",
    },
  ]

  const sacredRules = [
    {
      number: 1,
      rule: "No venture capital",
      reason: "We answer to users, not investors demanding 10x returns.",
    },
    {
      number: 2,
      rule: "No feature creep",
      reason: "Every addition must serve humanity's wellbeing, not our ego.",
    },
    {
      number: 3,
      rule: "No hiring non-believers",
      reason: "This is a cathedral build. It requires true faith in the mission.",
    },
    {
      number: 4,
      rule: "No shortcuts",
      reason: "Quality compounds. Rushing creates debt we'll pay forever.",
    },
    {
      number: 5,
      rule: "No selling out — ever",
      reason: "This project will outlive its founders. The mission is permanent.",
    },
  ]

  const timeline = [
    { year: "Year 1", milestone: "Learning & First Code", description: "Building foundations, learning deeply" },
    { year: "Year 5", milestone: "Alpha Release", description: "First users experience the vision" },
    { year: "Year 10", milestone: "Platform Maturity", description: "Ecosystem thrives, community grows" },
    { year: "Year 15", milestone: "Hardware Revolution", description: "Devices in hands worldwide" },
    { year: "Year 20", milestone: "1 Billion Users", description: "True scale, true impact" },
    { year: "Year 30", milestone: "Next Generation", description: "Passing the torch, mission secured" },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-background via-background to-card">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance tracking-tight">
              A 30-year <span className="text-primary">cathedral build</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-balance">
              Not an app. Not a company. A digital home for humanity.
            </p>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Core Principles"
            subtitle="The unchanging values that guide every decision"
            className="mb-16"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {principles.map((principle) => (
              <Card
                key={principle.title}
                className="bg-card border-border/50 hover:border-primary/30 transition-colors"
              >
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                      <principle.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-foreground">{principle.title}</h3>
                      <p className="text-sm font-medium text-primary">{principle.description}</p>
                      <p className="text-sm text-muted-foreground">{principle.detail}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* The Sacred Rules */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="The Sacred Rules"
            subtitle="Non-negotiable commitments that protect the mission"
            className="mb-16"
          />

          <div className="max-w-3xl mx-auto space-y-6">
            {sacredRules.map((item) => (
              <div
                key={item.number}
                className="flex items-start gap-6 p-6 rounded-lg bg-background border border-border/50 hover:border-primary/30 transition-colors"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">{item.number}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">{item.rule}</h3>
                  <p className="text-muted-foreground">{item.reason}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why 30 Years */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Why 30 Years?" className="mb-12" />

          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="bg-card border-border/50">
              <CardContent className="pt-6 space-y-6">
                <div className="flex items-start gap-4">
                  <Building2 className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold text-foreground">Generational Thinking</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      The great cathedrals of Europe took centuries to build. Notre-Dame: 182 years. Sagrada Família:
                      still ongoing after 140+ years. The builders knew they wouldn't see completion, yet they poured
                      their hearts into every stone.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      We've lost this patience in tech. Everything must be built yesterday, scaled tomorrow, sold next
                      week. The result? Fragile systems, exploitative business models, technology that serves capital
                      instead of humans.
                    </p>
                    <p className="text-lg text-foreground leading-relaxed font-medium">
                      30 years gives us time to do it right. To build foundations that last. To create something truly
                      worthy of humanity's trust.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-card border-border/50">
                <CardContent className="pt-6 text-center space-y-3">
                  <Clock className="h-10 w-10 text-primary mx-auto" />
                  <h4 className="font-semibold text-foreground">Years 1-10</h4>
                  <p className="text-sm text-muted-foreground">Foundation building, learning, core development</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border/50">
                <CardContent className="pt-6 text-center space-y-3">
                  <Shield className="h-10 w-10 text-primary mx-auto" />
                  <h4 className="font-semibold text-foreground">Years 11-20</h4>
                  <p className="text-sm text-muted-foreground">Platform maturity, hardware rollout, mass adoption</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border/50">
                <CardContent className="pt-6 text-center space-y-3">
                  <Users className="h-10 w-10 text-primary mx-auto" />
                  <h4 className="font-semibold text-foreground">Years 21-30</h4>
                  <p className="text-sm text-muted-foreground">
                    Global impact, legacy documentation, mission preservation
                  </p>
                </CardContent>
              </Card>
            </div>

            <blockquote className="border-l-4 border-primary pl-6 py-2 italic text-lg text-muted-foreground">
              "Amazon started in a garage. Linux started with Linus learning. All it takes is time, belief, and refusing
              to compromise."
            </blockquote>
          </div>
        </div>
      </section>

      {/* The Promise */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="The Promise" subtitle="What we're building for" className="mb-12" />

          <div className="max-w-3xl mx-auto space-y-6 text-center">
            <p className="text-xl text-foreground leading-relaxed text-balance">
              In 2055, when you wake up, your technology will care about your wellbeing, not your engagement metrics.
            </p>
            <p className="text-xl text-foreground leading-relaxed text-balance">
              Your children will grow up with AI companions who protect their innocence, not exploit their attention.
            </p>
            <p className="text-xl text-foreground leading-relaxed text-balance">
              Your parents will have technology that empowers their independence, not confuses or diminishes them.
            </p>
            <p className="text-xl text-foreground leading-relaxed text-balance">
              Your data, your attention, your digital life — truly yours.
            </p>
            <div className="pt-8">
              <p className="text-2xl font-semibold text-primary text-balance">
                This is worth 30 years. This is worth everything.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Ready to join the journey?</h2>
            <p className="text-lg text-muted-foreground">Day 1 of 10,950. Every day matters. Every believer counts.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/#newsletter">
                  Join the Journey <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/roadmap">View the Roadmap</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
