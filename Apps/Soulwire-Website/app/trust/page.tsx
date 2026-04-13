import Link from "next/link"
import { Shield, Lock, Eye, Server, Users, CheckCircle2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeading } from "@/components/section-heading"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function TrustPage() {
  const securityLayers = [
    {
      layer: "Hardware Security",
      icon: Shield,
      features: [
        "SoulChip secure enclave for cryptographic operations",
        "Physical privacy switches (camera, mic, wireless)",
        "Tamper-evident seals and destruction beacons",
        "Secure boot with verified firmware",
      ],
    },
    {
      layer: "SoulLang Security",
      icon: Lock,
      features: [
        "Memory safety prevents buffer overflows",
        "Granular permission system for all code",
        "Compile-time security verification",
        "Sandboxed execution environments",
      ],
    },
    {
      layer: "SoulOS Security",
      icon: Server,
      features: [
        "Process isolation and containerization",
        "End-to-end encryption for all data",
        "Encrypted storage with user-controlled keys",
        "Secure update mechanism",
      ],
    },
    {
      layer: "Network Security",
      icon: Eye,
      features: [
        "Built-in VPN (no third-party provider)",
        "No telemetry or analytics sent anywhere",
        "DNS over HTTPS by default",
        "Mesh networking for resilience",
      ],
    },
    {
      layer: "AI Security",
      icon: Users,
      features: [
        "All Guardian processing happens locally",
        "No training data sent to cloud",
        "Can't share your data even if compromised",
        "Open model weights for verification",
      ],
    },
  ]

  const ageProtection = [
    {
      age: "0-12 years",
      protection: "Only verified family contacts",
      details: "Complete isolation from strangers. All communication requires explicit parent approval.",
    },
    {
      age: "13-17 years",
      protection: "Protected teen bubble",
      details: "Can connect with verified peers, but protected from adult users. Content filtering active.",
    },
    {
      age: "18+ years",
      protection: "Full access with responsibility",
      details: "Complete freedom, but cannot contact minors without family relationship verification.",
    },
  ]

  const yourRights = [
    {
      right: "View Your Data",
      description: "See everything stored about you, in plain language",
    },
    {
      right: "Export Your Data",
      description: "Download everything in standard formats",
    },
    {
      right: "Delete Your Data",
      description: "True deletion, not just hiding from view",
    },
    {
      right: "Control Sharing",
      description: "Decide exactly what syncs to cloud (if anything)",
    },
    {
      right: "Revoke Access",
      description: "Disconnect any service or integration instantly",
    },
    {
      right: "Know What Happens",
      description: "Plain-language explanations of all processes",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-background via-background to-card">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="text-4xl mb-4">🛡</div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance tracking-tight">
              Your data isn't <span className="text-primary">our product</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-balance">
              Privacy isn't a feature. It's the foundation.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy - Plain Language */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Privacy Policy" subtitle="In plain language, not legalese" className="mb-16" />

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-border/50 rounded-lg overflow-hidden bg-card">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-accent/50 transition-colors">
                  <span className="text-lg font-semibold text-foreground">What we store on your device</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <div className="space-y-4 pt-4">
                    <p className="text-muted-foreground">
                      Everything lives on YOUR device first. Your photos, messages, health data, Guardian conversations,
                      calendar, documents - all stored locally with encryption controlled by YOUR password.
                    </p>
                    <p className="text-muted-foreground">
                      We designed SoulWire to work completely offline. You don't need us to access your own information.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-border/50 rounded-lg overflow-hidden bg-card">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-accent/50 transition-colors">
                  <span className="text-lg font-semibold text-foreground">What we store in the cloud (optional)</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <div className="space-y-4 pt-4">
                    <p className="text-muted-foreground">
                      If you choose encrypted cloud backup, we store an encrypted copy of your data. The encryption
                      happens on YOUR device. We can't read it. Law enforcement can't read it. Our employees can't read
                      it.
                    </p>
                    <p className="text-muted-foreground">
                      Only you have the keys. If you lose your password, we cannot recover your data. That's by design.
                    </p>
                    <p className="text-foreground font-medium">Cloud backup is completely optional.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-border/50 rounded-lg overflow-hidden bg-card">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-accent/50 transition-colors">
                  <span className="text-lg font-semibold text-foreground">What we NEVER collect</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <div className="space-y-3 pt-4">
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-muted-foreground">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>No usage analytics or telemetry</span>
                      </li>
                      <li className="flex items-start gap-2 text-muted-foreground">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>No location tracking (unless you use navigation)</span>
                      </li>
                      <li className="flex items-start gap-2 text-muted-foreground">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>No browsing history</span>
                      </li>
                      <li className="flex items-start gap-2 text-muted-foreground">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>No contact list scraping</span>
                      </li>
                      <li className="flex items-start gap-2 text-muted-foreground">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>No advertising profiles</span>
                      </li>
                      <li className="flex items-start gap-2 text-muted-foreground">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>No data selling to third parties</span>
                      </li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-border/50 rounded-lg overflow-hidden bg-card">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-accent/50 transition-colors">
                  <span className="text-lg font-semibold text-foreground">Your rights</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <div className="space-y-3 pt-4">
                    <p className="text-muted-foreground mb-4">You have complete control:</p>
                    {yourRights.map((item) => (
                      <div key={item.right} className="flex items-start gap-3 p-3 rounded-lg bg-background/50">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-foreground">{item.right}</p>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Security Architecture */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Security Architecture" subtitle="Five layers of protection" className="mb-16" />

          <div className="max-w-5xl mx-auto space-y-6">
            {securityLayers.map((layer, i) => (
              <Card key={layer.layer} className="bg-background border-border/50">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <layer.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center gap-3">
                        <h3 className="text-xl font-semibold text-foreground">{layer.layer}</h3>
                        <span className="text-sm text-muted-foreground">Layer {i + 1}</span>
                      </div>
                      <ul className="space-y-2">
                        {layer.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2 text-muted-foreground">
                            <span className="text-primary mt-1">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Age Protection */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Age Protection" subtitle="Zero tolerance for child exploitation" className="mb-16" />

          <div className="max-w-4xl mx-auto space-y-6">
            {ageProtection.map((tier) => (
              <Card key={tier.age} className="bg-card border-border/50">
                <CardContent className="pt-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-foreground">{tier.age}</h3>
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                      {tier.protection}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{tier.details}</p>
                </CardContent>
              </Card>
            ))}

            <Card className="bg-destructive/5 border-destructive/30">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Shield className="h-8 w-8 text-destructive flex-shrink-0 mt-1" />
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">Zero Tolerance Policy</h3>
                    <p className="text-muted-foreground">
                      Age deception results in permanent ban. No appeals. No second chances. We use AI, device
                      fingerprinting, and behavioral analysis to detect fake ages. Children's safety is non-negotiable.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Transparency Commitment */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Transparency Commitment" className="mb-12" />

          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="bg-background border-border/50">
              <CardContent className="pt-6 space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Open Source Core</h3>
                <p className="text-muted-foreground">
                  SoulLang, SoulOS, and Guardian models will be open source. Security through transparency, not
                  obscurity. The code that protects you should be code you can audit.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border/50">
              <CardContent className="pt-6 space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Security Audits</h3>
                <p className="text-muted-foreground">
                  Annual third-party security audits, results published publicly. Bug bounty program with fair
                  compensation. We want hackers to find vulnerabilities before bad actors do.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border/50">
              <CardContent className="pt-6 space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Warrant Canary</h3>
                <p className="text-muted-foreground">
                  We publish a warrant canary quarterly. If we're ever compelled to compromise user privacy, the canary
                  stops updating. With end-to-end encryption and no data access, there's nothing to hand over anyway.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Trust through design</h2>
            <p className="text-lg text-muted-foreground">Not marketing promises. Architectural guarantees.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/#newsletter">
                  Join the Journey <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/vision">Our Vision</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
