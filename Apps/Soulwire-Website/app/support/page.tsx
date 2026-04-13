import Link from "next/link"
import { Heart, ArrowRight, DollarSign, Users, Gift, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeading } from "@/components/section-heading"

export default function SupportPage() {
  const tiers = [
    {
      name: "Free Forever",
      price: "$0",
      period: "",
      description: "Everything essential",
      features: [
        "All safety features",
        "All Realms",
        "All five Guardians",
        "50GB encrypted backup",
        "One device",
        "Community support",
      ],
      cta: "Get Started Free",
      href: "/#newsletter",
      highlighted: false,
    },
    {
      name: "Supporter",
      price: "$7",
      period: "/month",
      description: "Help build the future",
      features: [
        "Everything in Free",
        "500GB backup",
        "Beta features access",
        "Multiple devices",
        "Supporter badge",
        "Priority support",
      ],
      cta: "Become a Supporter",
      href: "/#newsletter",
      highlighted: true,
    },
    {
      name: "Founder",
      price: "$20",
      period: "/month",
      description: "Shape the journey",
      features: [
        "Everything in Supporter",
        "2TB backup",
        "Vote on features",
        "Developer API access",
        "Annual founder events",
        "Dedicated support",
      ],
      cta: "Become a Founder",
      href: "/#newsletter",
      highlighted: false,
    },
    {
      name: "Lifetime Legend",
      price: "$2,000",
      period: "once",
      description: "Forever supporter",
      features: [
        "Everything forever",
        "Unlimited backup",
        "Signed device",
        "Transferable to family",
        "Name in credits",
        "Lifetime updates",
      ],
      cta: "Become a Legend",
      href: "/#newsletter",
      highlighted: false,
    },
  ]

  const donationAmounts = [
    { amount: "$5", impact: "1 hour of development time" },
    { amount: "$25", impact: "A day of server costs" },
    { amount: "$50", impact: "Security audit contribution" },
    { amount: "$100", impact: "Hardware prototype testing" },
    { amount: "$500", impact: "One free device for someone in need" },
    { amount: "$1,000", impact: "Week of full-time development" },
  ]

  const specialPricing = [
    {
      category: "Families",
      discount: "30% off additional members",
      note: "Kids under 18 always free",
    },
    {
      category: "Students",
      discount: "40% off with valid ID",
      note: "Full access to learning tools",
    },
    {
      category: "Non-Profits",
      discount: "Up to 75% off",
      note: "Based on size and mission",
    },
    {
      category: "Enterprise",
      discount: "Custom pricing",
      note: "Volume discounts available",
    },
  ]

  const budgetBreakdown = [
    { category: "Development Salaries", percentage: 40, color: "bg-primary" },
    { category: "Hardware & Infrastructure", percentage: 20, color: "bg-guardian-violet" },
    { category: "Support & Documentation", percentage: 15, color: "bg-forest-green" },
    { category: "Future Development Fund", percentage: 15, color: "bg-ember-gold" },
    { category: "Legal & Compliance", percentage: 10, color: "bg-soft-rose" },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-background via-background to-card">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-ember-gold/5 via-background to-background" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="text-4xl mb-4">💝</div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance tracking-tight">
              Dignity isn't a <span className="text-primary">luxury feature</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-balance">
              Free for everyone. Supported by those who can.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Choose Your Support Level"
            subtitle="Every tier helps build the future"
            className="mb-16"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {tiers.map((tier) => (
              <Card
                key={tier.name}
                className={`relative ${
                  tier.highlighted ? "bg-primary/5 border-2 border-primary/50 shadow-lg" : "bg-card border-border/50"
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardContent className="pt-6 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">{tier.name}</h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-foreground">{tier.price}</span>
                      <span className="text-muted-foreground">{tier.period}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{tier.description}</p>
                  </div>

                  <ul className="space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-0.5">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    className={`w-full ${
                      tier.highlighted
                        ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                        : "bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                    }`}
                  >
                    <Link href={tier.href}>{tier.cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Make a One-Time Donation" subtitle="Help us build the future" className="mb-16" />

          <div className="max-w-5xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {donationAmounts.map((donation) => (
                <Card
                  key={donation.amount}
                  className="bg-background border-border/50 hover:border-primary/30 transition-colors cursor-pointer"
                >
                  <CardContent className="pt-6 text-center space-y-2">
                    <p className="text-2xl font-bold text-foreground">{donation.amount}</p>
                    <p className="text-sm text-muted-foreground">{donation.impact}</p>
                    <Button className="w-full mt-4 bg-ember-gold hover:bg-ember-gold/90 text-background" size="sm">
                      Donate
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-background border-border/50">
              <CardContent className="pt-6 text-center space-y-4">
                <DollarSign className="h-12 w-12 text-ember-gold mx-auto" />
                <h3 className="text-xl font-semibold text-foreground">Custom Amount</h3>
                <p className="text-muted-foreground">Choose any amount that feels right</p>
                <Button className="bg-ember-gold hover:bg-ember-gold/90 text-background">Donate Custom Amount</Button>
                <p className="text-xs text-muted-foreground pt-2">
                  100% funds development. No investors to pay. Tax-deductible where applicable.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Heroes Program */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Heroes Program" subtitle="Free forever for those who serve" className="mb-12" />

          <div className="max-w-4xl mx-auto">
            <Card className="bg-card border-2 border-primary/30">
              <CardContent className="pt-6 space-y-6">
                <div className="flex items-start gap-4">
                  <Gift className="h-10 w-10 text-primary flex-shrink-0 mt-1" />
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold text-foreground">You serve humanity. This is our thanks.</h3>
                    <p className="text-lg text-muted-foreground">Free Founder-tier access for:</p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {[
                        "Teachers & Educators",
                        "Nurses & Healthcare Workers",
                        "Emergency Responders",
                        "Firefighters",
                        "Social Workers",
                        "Librarians",
                        "Veterans with Disabilities",
                        "DV Counselors",
                        "Public Defenders",
                        "Hospice Workers",
                      ].map((profession) => (
                        <div key={profession} className="flex items-center gap-2">
                          <Heart className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{profession}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground mt-4">
                      Apply for Heroes Program
                    </Button>
                    <p className="text-sm text-muted-foreground">
                      Verification required (work email, badge photo, etc.). Applications reviewed within 48 hours.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Special Pricing */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Special Pricing" subtitle="Because life circumstances matter" className="mb-16" />

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {specialPricing.map((pricing) => (
              <Card key={pricing.category} className="bg-background border-border/50">
                <CardContent className="pt-6 space-y-3">
                  <h3 className="text-xl font-semibold text-foreground">{pricing.category}</h3>
                  <p className="text-lg text-primary font-semibold">{pricing.discount}</p>
                  <p className="text-sm text-muted-foreground">{pricing.note}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Where Your Money Goes */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Where Your Money Goes" subtitle="Complete transparency in funding" className="mb-16" />

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
              {budgetBreakdown.map((item) => (
                <div key={item.category} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-foreground font-medium">{item.category}</span>
                    <span className="text-muted-foreground">{item.percentage}%</span>
                  </div>
                  <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                    <div className={`h-full ${item.color}`} style={{ width: `${item.percentage}%` }} />
                  </div>
                </div>
              ))}
            </div>

            <Card className="bg-card border-border/50">
              <CardContent className="pt-6 space-y-4">
                <div className="grid sm:grid-cols-2 gap-6 text-center">
                  <div className="space-y-2">
                    <p className="text-4xl font-bold text-destructive">0%</p>
                    <p className="text-sm text-muted-foreground">To Shareholders</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-4xl font-bold text-destructive">0%</p>
                    <p className="text-sm text-muted-foreground">Executive Bonuses Over $200K</p>
                  </div>
                </div>
                <p className="text-center text-muted-foreground pt-4 border-t border-border/50">
                  Every dollar goes to building, maintaining, and improving SoulWire. No investors. No golden
                  parachutes. Just the mission.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why This Model Works */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Why This Model Works" className="mb-12" />

          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="bg-background border-border/50">
              <CardContent className="pt-6 space-y-4">
                <Users className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">Aligned Incentives</h3>
                <p className="text-muted-foreground leading-relaxed">
                  When you're the customer, not the product, our success depends on serving you well. If we exploit you,
                  you leave. If we protect you, you stay. Simple.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border/50">
              <CardContent className="pt-6 space-y-4">
                <Heart className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">Sustainable Growth</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We don't need hockey-stick growth to satisfy VCs. We need steady, sustainable support from believers.
                  10,000 supporters at $7/month funds serious development. 100,000 changes the world.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border/50">
              <CardContent className="pt-6 space-y-4">
                <Shield className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">No Compromise Pressure</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Without investors demanding 10x returns, we never face pressure to monetize your data, inject ads, or
                  sell to the highest bidder. The mission stays pure.
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Build the future with us</h2>
            <p className="text-lg text-muted-foreground">
              Every contribution, no matter the size, brings us closer to a digital world that serves humanity.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button asChild size="lg" className="bg-ember-gold hover:bg-ember-gold/90 text-background">
                <Link href="#donation">
                  Donate Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/#newsletter">Join Newsletter</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
