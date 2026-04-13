import Link from "next/link"
import { ArrowRight, Eye, LockKeyholeOpen as LockKeypressOpen, Tag, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeading } from "@/components/section-heading"
import { NewsletterForm } from "@/components/newsletter-form"

export default function HomePage() {
  const problems = [
    {
      icon: Eye,
      title: "Your apps spy on you",
      description: "Every click tracked, every moment monetized",
    },
    {
      icon: LockKeypressOpen,
      title: "Your data isn't yours",
      description: "Locked in corporate silos, sold to the highest bidder",
    },
    {
      icon: Tag,
      title: "Your attention is sold",
      description: "Algorithms designed to extract, not to serve",
    },
  ]

  const pillars = [
    {
      emoji: "🕯",
      title: "SoulLang",
      description: "The foundation. A language built from scratch.",
      href: "/soullang",
    },
    {
      emoji: "🖥",
      title: "SoulOS",
      description: "The brain. An OS that puts humans first.",
      href: "/soullang",
    },
    {
      emoji: "🤖",
      title: "The Guardians",
      description: "Your AI family. Five protectors who truly care.",
      href: "/guardians",
    },
    {
      emoji: "🌍",
      title: "The Realms",
      description: "Your digital life. 42 apps that work together.",
      href: "/realms",
    },
    {
      emoji: "📱",
      title: "The Hardware",
      description: "Your trusted devices. Built to last decades.",
      href: "/devices",
    },
  ]

  const values = [
    { label: "No Ads", description: "Ever. Period." },
    { label: "No Tracking", description: "Your data stays with you" },
    { label: "No VC", description: "No investors to answer to" },
    { label: "Open Development", description: "Watch it being built" },
  ]

  const dayInLife = [
    { time: "6:47 AM", event: "Gentle wake from SoulWatch", realm: "Health" },
    { time: "7:15 AM", event: "Family Realm morning coordination", realm: "Family" },
    { time: "8:30 AM", event: "Creator Realm on commute", realm: "Work" },
    { time: "12:00 PM", event: "Health check from Medical Realm", realm: "Health" },
    { time: "3:00 PM", event: "Elder Care Realm alert about mom", realm: "Family" },
    { time: "6:00 PM", event: "Tilda helps with homework", realm: "Education" },
    { time: "9:00 PM", event: "Entertainment Realm movie night", realm: "Entertainment" },
    { time: "11:00 PM", event: "Lana's security check, peaceful sleep", realm: "Security" },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-card">
        {/* Subtle animated background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance tracking-tight">
              Technology that protects your <span className="text-primary">peace of mind</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-balance max-w-3xl mx-auto">
              A 30-year project to build a digital home for humanity.{" "}
              <span className="text-foreground font-medium">No ads. No tracking. No compromise.</span>
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg h-12 px-8"
              >
                <Link href="#newsletter">
                  Join the Journey <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg h-12 px-8 bg-transparent">
                <Link href="/vision">Learn More</Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground pt-4">Day 1 of 10,950 — The journey begins now.</p>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="The digital world is broken" className="mb-16" />

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            {problems.map((problem) => (
              <Card key={problem.title} className="bg-background border-border/50">
                <CardContent className="pt-6 text-center space-y-4">
                  <div className="flex justify-center">
                    <div className="p-3 rounded-full bg-destructive/10">
                      <problem.icon className="h-8 w-8 text-destructive" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{problem.title}</h3>
                  <p className="text-muted-foreground">{problem.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-center text-2xl font-medium text-primary">We're building something different.</p>
        </div>
      </section>

      {/* The Vision Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="What is SoulWire?"
            subtitle="A complete digital ecosystem built from the ground up with one goal: to protect and serve humanity, not exploit it."
            className="mb-16"
          />

          <div className="max-w-4xl mx-auto mb-16">
            <Card className="bg-gradient-to-br from-card to-primary/5 border-primary/20">
              <CardContent className="pt-8 space-y-6">
                <div className="text-center space-y-4">
                  <h3 className="text-3xl font-bold text-foreground">Building a cathedral, not a startup</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Medieval cathedral builders knew they'd never see their work completed. They laid stones for
                    generations yet unborn. That's what we're doing here.
                  </p>
                </div>
                <div className="grid md:grid-cols-3 gap-6 pt-6">
                  <div className="space-y-2 text-center">
                    <p className="text-4xl font-bold text-primary">30</p>
                    <p className="text-sm text-muted-foreground">Years to completion</p>
                  </div>
                  <div className="space-y-2 text-center">
                    <p className="text-4xl font-bold text-primary">10,950</p>
                    <p className="text-sm text-muted-foreground">Days of building</p>
                  </div>
                  <div className="space-y-2 text-center">
                    <p className="text-4xl font-bold text-primary">∞</p>
                    <p className="text-sm text-muted-foreground">Years it should last</p>
                  </div>
                </div>
                <div className="pt-6 space-y-3 text-center">
                  <p className="text-foreground font-medium">No shortcuts. No hype cycles. No exit strategy.</p>
                  <p className="text-muted-foreground">
                    Just slow, deliberate work toward something that matters. Technology built to outlive us all.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          {/* </CHANGE> */}

          <div className="max-w-4xl mx-auto bg-card border border-border/50 rounded-lg p-8 space-y-6">
            <div className="space-y-4 text-center">
              <p className="text-lg text-foreground leading-relaxed">
                SoulWire is a custom programming language, a privacy-first operating system, five guardian AIs who truly
                care about you, 42 interconnected life realms, and sovereign hardware built to last decades.
              </p>
              <p className="text-muted-foreground">
                Every layer designed with intention. Every decision made for humans, not shareholders.
              </p>
            </div>

            {/* Layered diagram */}
            <div className="grid grid-cols-1 gap-3 pt-8">
              {[
                { label: "Foundation", sublabel: "SoulLang", color: "bg-primary/10 border-primary/30" },
                { label: "Operating System", sublabel: "SoulOS", color: "bg-primary/10 border-primary/30" },
                {
                  label: "Guardians",
                  sublabel: "Five AI Protectors",
                  color: "bg-guardian-violet/10 border-guardian-violet/30",
                },
                { label: "Realms", sublabel: "42 Life Apps", color: "bg-ember-gold/10 border-ember-gold/30" },
                {
                  label: "Devices",
                  sublabel: "Sovereign Hardware",
                  color: "bg-forest-green/10 border-forest-green/30",
                },
              ].map((layer, i) => (
                <div
                  key={layer.label}
                  className={`p-4 rounded-lg border-2 ${layer.color} transition-all hover:scale-[1.02]`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-foreground">{layer.label}</p>
                      <p className="text-sm text-muted-foreground">{layer.sublabel}</p>
                    </div>
                    <span className="text-2xl font-bold text-muted-foreground/30">{i + 1}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* A Day in Your SoulWire Life */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="A day in your SoulWire life (2055)"
            subtitle="Imagine a world where technology serves you, not the other way around"
            className="mb-16"
          />

          <div className="max-w-3xl mx-auto space-y-4">
            {dayInLife.map((moment, i) => (
              <div
                key={moment.time}
                className="flex items-start gap-4 p-4 rounded-lg bg-background/50 hover:bg-background transition-colors"
              >
                <div className="flex-shrink-0 w-20 pt-1">
                  <p className="text-sm font-mono text-primary">{moment.time}</p>
                </div>
                <div className="flex-1">
                  <p className="text-foreground">{moment.event}</p>
                  <p className="text-sm text-muted-foreground">{moment.realm}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Five Pillars */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="The Five Pillars" subtitle="Building the future, layer by layer" className="mb-16" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pillars.map((pillar) => (
              <Link key={pillar.title} href={pillar.href}>
                <Card className="h-full bg-card border-border/50 hover:border-primary/50 transition-all hover:scale-[1.02]">
                  <CardContent className="pt-6 space-y-4">
                    <div className="text-4xl">{pillar.emoji}</div>
                    <h3 className="text-xl font-semibold text-foreground">{pillar.title}</h3>
                    <p className="text-muted-foreground">{pillar.description}</p>
                    <div className="flex items-center text-primary text-sm font-medium pt-2">
                      Explore <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof / Trust Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Built with different values" className="mb-12" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            {values.map((value) => (
              <div key={value.label} className="text-center space-y-2">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="font-semibold text-foreground">{value.label}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>

          <blockquote className="text-center max-w-2xl mx-auto">
            <p className="text-xl md:text-2xl font-medium text-foreground text-balance">
              "Your data isn't our product — it's your story."
            </p>
          </blockquote>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <SectionHeading
              title="Follow the 30-year journey"
              subtitle="Join the builders, dreamers, and believers shaping the future of technology"
            />
            <NewsletterForm />
          </div>
        </div>
      </section>
    </div>
  )
}
