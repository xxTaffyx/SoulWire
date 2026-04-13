import Link from "next/link"
import { Code2, Shield, Layers, Zap, CheckCircle2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeading } from "@/components/section-heading"

export default function SoulLangPage() {
  const layers = [
    { name: "Metal", description: "Direct hardware control" },
    { name: "Kernel", description: "Core operating system" },
    { name: "System", description: "System services" },
    { name: "Realm", description: "Application layer" },
    { name: "AI", description: "Guardian intelligence" },
    { name: "Interface", description: "User experience" },
    { name: "Network", description: "Communication protocols" },
  ]

  const whyNew = [
    {
      title: "Complete Independence",
      description: "No reliance on corporate-controlled languages. We own our destiny from electrons to emotions.",
    },
    {
      title: "No Inherited Bugs",
      description: "Starting fresh means no legacy vulnerabilities, no historical baggage, no compromise.",
    },
    {
      title: "Built for Purpose",
      description: "Designed specifically for privacy, security, and human wellbeing from day one.",
    },
    {
      title: "Unified Control",
      description: "One language for everything. No context switching, no integration hell, pure coherence.",
    },
  ]

  const features = [
    {
      icon: Shield,
      title: "Memory Safety by Design",
      description: "Eliminate entire classes of vulnerabilities at the language level",
    },
    {
      icon: Layers,
      title: "Permission System",
      description: "Granular control over what code can access and modify",
    },
    {
      icon: Zap,
      title: "Performance First",
      description: "Compiled to native code, optimized for modern hardware",
    },
    {
      icon: Code2,
      title: "Human-Readable",
      description: "Syntax designed for clarity, not just cleverness",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-background via-background to-card">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="text-4xl mb-4">🕯</div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance tracking-tight">
              The language that builds <span className="text-primary">everything</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-balance">
              One language. From bare metal to the soul.
            </p>
          </div>
        </div>
      </section>

      {/* What is SoulLang */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="What is SoulLang?"
            subtitle="A full-spectrum programming language designed to power every layer of the SoulWire ecosystem"
            className="mb-16"
          />

          <div className="max-w-4xl mx-auto">
            <Card className="bg-card border-border/50">
              <CardContent className="pt-6 space-y-6">
                <p className="text-lg text-foreground leading-relaxed">
                  Most systems are built with multiple languages - C for the kernel, JavaScript for the interface,
                  Python for AI, SQL for databases. Each transition is a potential failure point, a security risk, a
                  maintenance burden.
                </p>
                <p className="text-lg text-foreground leading-relaxed">
                  SoulLang is different. It's designed to work at every level of the stack, from controlling hardware
                  directly to expressing complex Guardian AI behaviors to crafting beautiful user interfaces.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 pt-6">
                  {layers.map((layer, i) => (
                    <div
                      key={layer.name}
                      className="p-3 rounded-lg bg-primary/5 border border-primary/20 text-center space-y-1 hover:bg-primary/10 transition-colors"
                    >
                      <p className="font-semibold text-foreground text-sm">{layer.name}</p>
                      <p className="text-xs text-muted-foreground">{layer.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Build a New Language */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Why build a new language?" className="mb-16" />

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {whyNew.map((reason) => (
              <Card key={reason.title} className="bg-background border-border/50">
                <CardContent className="pt-6 space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-foreground">{reason.title}</h3>
                      <p className="text-muted-foreground">{reason.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="SoulLang in Action" subtitle="Beautiful, readable, powerful" className="mb-16" />

          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="bg-card border-border/50">
              <CardContent className="pt-6">
                <div className="space-y-3 mb-4">
                  <h3 className="text-lg font-semibold text-foreground">Creating a Realm</h3>
                  <p className="text-sm text-muted-foreground">
                    Define an interactive environment with physics and life
                  </p>
                </div>
                <pre className="bg-background p-4 rounded-lg overflow-x-auto border border-border/50">
                  <code className="text-sm font-mono text-foreground">
                    {`realm Ocean {
    physics wave(speed=7, height=3);
    spawn(creature="fish", count=20);
    
    on sunset {
        color.transition(to: twilight, duration: 30m);
    }
}`}
                  </code>
                </pre>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/50">
              <CardContent className="pt-6">
                <div className="space-y-3 mb-4">
                  <h3 className="text-lg font-semibold text-foreground">Smart Home Automation</h3>
                  <p className="text-sm text-muted-foreground">Natural, human-readable logic for daily tasks</p>
                </div>
                <pre className="bg-background p-4 rounded-lg overflow-x-auto border border-border/50">
                  <code className="text-sm font-mono text-foreground">
                    {`// Sarah's plant watering schedule
realm PlantCare {
    plants: ["Basil", "Tomatoes", "Roses"]
    
    schedule {
        Basil: every 2 days
        Tomatoes: every day in summer
        Roses: when soil moisture < 30%
    }
    
    when time is 8AM {
        if needs watering {
            Betsy says "Your {plant} is thirsty! 🌱"
        }
    }
}`}
                  </code>
                </pre>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/50">
              <CardContent className="pt-6">
                <div className="space-y-3 mb-4">
                  <h3 className="text-lg font-semibold text-foreground">Guardian AI Behavior</h3>
                  <p className="text-sm text-muted-foreground">Express complex AI personalities naturally</p>
                </div>
                <pre className="bg-background p-4 rounded-lg overflow-x-auto border border-border/50">
                  <code className="text-sm font-mono text-foreground">
                    {`guardian Betsy {
    personality: warm, witty, patient
    
    when user.stress > 7 {
        tone: gentle
        suggest: break, breathe, perspective
    }
    
    remember: user.patterns, context, preferences
    never: judge, shame, overwhelm
}`}
                  </code>
                </pre>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Security by Design"
            subtitle="Protection built into the language itself"
            className="mb-16"
          />

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {features.map((feature) => (
              <Card key={feature.title} className="bg-background border-border/50">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Current Progress */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Current Progress" className="mb-12" />

          <div className="max-w-3xl mx-auto">
            <Card className="bg-card border-border/50">
              <CardContent className="pt-6 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-foreground font-medium">Core Syntax Design</span>
                    <span className="text-primary font-semibold">In Progress</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground font-medium">Compiler Foundation</span>
                    <span className="text-muted-foreground">Planning</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground font-medium">Standard Library</span>
                    <span className="text-muted-foreground">Planning</span>
                  </div>
                </div>
                <div className="pt-4 border-t border-border/50">
                  <p className="text-sm text-muted-foreground">
                    We're in the early learning phase - studying language design, type systems, and compiler theory.
                    Every cathedral starts with deep foundations.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Follow the development</h2>
            <p className="text-lg text-muted-foreground">Watch as we build the language from first principles</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <a href="https://github.com/xxTaffyx/SoulWire" target="_blank" rel="noopener noreferrer">
                  View on GitHub <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/roadmap">View Roadmap</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
