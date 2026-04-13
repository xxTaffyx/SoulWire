import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeading } from "@/components/section-heading"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function RealmsPage() {
  const realmCategories = [
    {
      category: "Creative & Work",
      icon: "💼",
      realms: [
        {
          name: "Creator Realm",
          slug: "creator",
          description: "Your creative workspace - writing, design, music, video",
        },
        {
          name: "Creative World",
          slug: "creative-world",
          description: "Immersive environments for artistic expression",
        },
        {
          name: "Gaming Realm",
          slug: "gaming",
          description: "Play, create, and share games",
        },
        {
          name: "Business Realm",
          slug: "business",
          description: "Manage your business operations and growth",
        },
        {
          name: "Career Growth Realm",
          slug: "career-growth",
          description: "Professional development and networking",
        },
        {
          name: "Task & Project Realm",
          slug: "task-project",
          description: "Organize work with Betsy's help",
        },
      ],
    },
    {
      category: "Family & Relationships",
      icon: "👨‍👩‍👧",
      realms: [
        {
          name: "Family Realm",
          slug: "family",
          description: "Coordinate schedules, share moments, stay connected",
        },
        {
          name: "Co-Parent Realm",
          slug: "co-parent",
          description: "Separated parents coordinating care",
        },
        {
          name: "Relationship Realm",
          slug: "relationship",
          description: "Strengthen partnerships and communication",
        },
        {
          name: "Elder Care Realm",
          slug: "elder-care",
          description: "Coordinate care for aging loved ones",
        },
        {
          name: "Pets Realm",
          slug: "pets",
          description: "Track health, schedule care for furry family",
        },
        {
          name: "Parenthood Realm",
          slug: "parenthood",
          description: "Support for raising children",
        },
      ],
    },
    {
      category: "Health & Wellness",
      icon: "🩺",
      realms: [
        {
          name: "Medical Realm",
          slug: "medical",
          description: "Health tracking, appointments, records with May",
        },
        {
          name: "Doctor & Provider Realm",
          slug: "doctor-provider",
          description: "For healthcare professionals",
        },
        {
          name: "Assistive Tech Realm",
          slug: "assistive-tech",
          description: "Accessibility tools for disabilities",
        },
        {
          name: "SoulHold",
          slug: "soulhold",
          description: "Mental health support and therapy tools",
        },
        {
          name: "SoulHaven",
          slug: "soulhaven",
          description: "Domestic violence support and safety",
        },
      ],
    },
    {
      category: "Money & Resources",
      icon: "💰",
      realms: [
        {
          name: "SoulBank",
          slug: "soulbank",
          description: "Privacy-first banking and financial management",
        },
        {
          name: "Payments Realm",
          slug: "soulbank", // Links to SoulBank as it's integrated
          description: "Send, receive, and manage money",
        },
        {
          name: "Housing & Renting Realm",
          slug: "housing-renting",
          description: "Find homes, manage leases, track maintenance",
        },
        {
          name: "Vehicle Realm",
          slug: "vehicle",
          description: "Car maintenance, registration, insurance",
        },
        {
          name: "The Shared Hearth",
          slug: "shared-hearth",
          description: "Charitable giving and mutual aid",
        },
      ],
    },
    {
      category: "Education & Growth",
      icon: "📚",
      realms: [
        {
          name: "Education Realm",
          slug: "education",
          description: "Learning with Tilda for all ages",
        },
        {
          name: "Memory Realm",
          slug: "memory",
          description: "Store and recall your life's moments",
        },
      ],
    },
    {
      category: "Social & Entertainment",
      icon: "🎭",
      realms: [
        {
          name: "Social Realm",
          slug: "social",
          description: "Connect with friends, safely and calmly",
        },
        {
          name: "Entertainment Realm",
          slug: "entertainment",
          description: "Movies, shows, music curated for you",
        },
        {
          name: "Cinema Keep",
          slug: "cinema-keep",
          description: "Your personal film and media library",
        },
        {
          name: "Safe Browser Realm",
          slug: "safe-browser",
          description: "Web browsing with Lana's protection",
        },
      ],
    },
    {
      category: "Home & Daily Life",
      icon: "🏠",
      realms: [
        {
          name: "Home Realm",
          slug: "home",
          description: "Smart home control, maintenance, automation",
        },
        {
          name: "Travel Realm",
          slug: "travel",
          description: "Plan trips, navigate, translate",
        },
        {
          name: "Identity Realm",
          slug: "identity",
          description: "Manage documents, IDs, verification",
        },
        {
          name: "Food Realm",
          slug: "food",
          description: "Recipes, meal planning, dietary tracking",
        },
        {
          name: "Legal Realm",
          slug: "legal",
          description: "Contracts, wills, legal assistance",
        },
        {
          name: "Civic Realm",
          slug: "civic",
          description: "Voting, local government, community",
        },
        {
          name: "News Realm",
          slug: "news",
          description: "Verified news with Clara's fact-checking",
        },
        {
          name: "Spiritual Realm",
          slug: "spiritual",
          description: "Faith, reflection, meaning",
        },
      ],
    },
    {
      category: "Professional Support",
      icon: "👷",
      realms: [
        {
          name: "Professional Support",
          slug: "professional-support",
          description: "17 professions, one app that adapts to your work",
        },
      ],
    },
    {
      category: "Safety Systems",
      icon: "🆘",
      realms: [
        {
          name: "SoulShelter",
          slug: "soulshelter",
          description: "Homelessness support and resources",
        },
        {
          name: "SoulBridge",
          slug: "soulbridge-translation",
          description: "Language translation and access",
        },
        {
          name: "SoulTrail",
          slug: "soultrail",
          description: "Missing persons location and recovery",
        },
        {
          name: "SoulDrive",
          slug: "souldrive",
          description: "Vehicle emergency and accident response",
        },
        {
          name: "Reentry Realm",
          slug: "reentry",
          description: "Post-incarceration support and integration",
        },
        {
          name: "Immigration Realm",
          slug: "immigration",
          description: "Navigate immigration systems and rights",
        },
      ],
    },
  ]

  const totalRealms = realmCategories.reduce((sum, cat) => sum + cat.realms.length, 0)

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-background via-background to-card">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="text-4xl mb-4">🌍</div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance tracking-tight">
              Your complete <span className="text-primary">digital life</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-balance">
              {totalRealms} interconnected spaces for every part of being human.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <p className="text-xl text-foreground leading-relaxed">
              Realms aren't just apps. They're spaces designed for specific parts of your life, working together
              seamlessly.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Your Family Realm talks to your Elder Care Realm. Your Health Realm coordinates with your Calendar. Your
              Guardians understand context across all your Realms.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              This is what technology should have been all along: designed for living, not just consuming.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Realm Explorer */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Explore the Realms" subtitle="Click any realm to learn more" className="mb-16" />

          <div className="max-w-5xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {realmCategories.map((category, i) => (
                <AccordionItem
                  key={category.category}
                  value={`item-${i}`}
                  className="border border-border/50 rounded-lg overflow-hidden bg-background"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-accent/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{category.icon}</span>
                      <span className="text-lg font-semibold text-foreground">{category.category}</span>
                      <span className="text-sm text-muted-foreground ml-2">({category.realms.length} realms)</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <div className="grid md:grid-cols-2 gap-4 pt-4">
                      {category.realms.map((realm) => (
                        <Link key={realm.name} href={`/realms/${realm.slug}`} className="group">
                          <div className="p-4 rounded-lg bg-card border border-border/50 hover:border-primary/50 hover:bg-accent/30 transition-all cursor-pointer h-full">
                            <div className="flex items-start justify-between gap-2">
                              <div className="flex-1">
                                <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                                  {realm.name}
                                </h4>
                                <p className="text-sm text-muted-foreground">{realm.description}</p>
                              </div>
                              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* How Realms Work Together */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="How Realms work together"
            subtitle="Everything connects, nothing is isolated"
            className="mb-12"
          />

          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="bg-card border-border/50">
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-xl">
                    1
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">Shared Context</h3>
                    <p className="text-muted-foreground">
                      When your Health Realm notices you're stressed, it tells your Calendar Realm to suggest lighter
                      scheduling. When your Family Realm has an emergency, all relevant Realms adapt.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/50">
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-xl">
                    2
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">Guardian Integration</h3>
                    <p className="text-muted-foreground">
                      Betsy sees across all your Realms to help you organize. May coordinates between Medical Realm and
                      Health tracking. Lana protects every Realm with consistent security.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/50">
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-xl">
                    3
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">Local-First Design</h3>
                    <p className="text-muted-foreground">
                      All Realms work offline first, syncing only when you choose. Your data flows between Realms on
                      YOUR device, not through corporate servers.
                    </p>
                  </div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Life, connected</h2>
            <p className="text-lg text-muted-foreground">
              Every realm designed to serve humanity, not extract value from it
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/#newsletter">
                Follow the Journey <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
