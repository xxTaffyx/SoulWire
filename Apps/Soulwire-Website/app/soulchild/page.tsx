import { SectionHeading } from "@/components/section-heading"
import { Card } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertCircle, Heart, Users, BookOpen, Shield, GraduationCap, Baby } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "SoulChild - Parenting Experience | SoulWire",
  description:
    "Practice, supplement, experience. SoulChild is a parenting experience for learning, healing, and growth - never a replacement for real children.",
}

export default function SoulChildPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
              <Baby className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-balance">SoulChild</h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-balance">
              Practice. Supplement. Experience. Never replace.
            </p>

            {/* Important Disclaimer */}
            <Card className="border-accent bg-accent/5 p-6 text-left mt-8">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">Important Disclaimer</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>SoulChild is NOT intended to replace real children.</strong> If you can have children and
                    want children, have real children. SoulChild is for those who can't, won't, or aren't ready yet.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* What is SoulChild */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-8">
            <SectionHeading
              title="What is SoulChild?"
              description="A parenting experience feature - the ability to engage with a digital child who grows, develops, and responds to your parenting."
            />

            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              <strong>Key word: EXPERIENCE.</strong> Not replacement. Not simulation of avoiding responsibility.
              Experience.
            </p>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-12">
            <SectionHeading
              title="Who It's For"
              description="SoulChild serves different needs, always as supplement or preparation - never replacement."
            />

            <Tabs defaultValue="practice" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 h-auto">
                <TabsTrigger
                  value="practice"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Practice
                </TabsTrigger>
                <TabsTrigger
                  value="supplementary"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Supplementary
                </TabsTrigger>
                <TabsTrigger
                  value="therapeutic"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Therapeutic
                </TabsTrigger>
                <TabsTrigger
                  value="educational"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Educational
                </TabsTrigger>
                <TabsTrigger
                  value="family"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Family
                </TabsTrigger>
              </TabsList>

              <TabsContent value="practice" className="mt-8">
                <Card className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Heart className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-3">Practice Parents (Learning First)</h3>
                      <div className="space-y-3 text-muted-foreground">
                        <div className="flex flex-col sm:flex-row sm:justify-between gap-1 py-2 border-b border-border/50">
                          <span className="font-medium text-foreground">Planning to have kids</span>
                          <span className="text-sm">Practice before the real thing</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:justify-between gap-1 py-2 border-b border-border/50">
                          <span className="font-medium text-foreground">First-time parent prep</span>
                          <span className="text-sm">Learn basics safely</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:justify-between gap-1 py-2 border-b border-border/50">
                          <span className="font-medium text-foreground">Couples discussing kids</span>
                          <span className="text-sm">See how you parent together</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:justify-between gap-1 py-2">
                          <span className="font-medium text-foreground">Unsure if ready</span>
                          <span className="text-sm">Test the experience</span>
                        </div>
                      </div>
                      <p className="mt-4 text-sm text-primary font-medium">
                        After SoulChild: Many will go on to have real children, better prepared.
                      </p>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="supplementary" className="mt-8">
                <Card className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Users className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-3">Supplementary Parents (Can't Have Bio Kids)</h3>
                      <div className="space-y-3 text-muted-foreground">
                        <div className="flex flex-col sm:flex-row sm:justify-between gap-1 py-2 border-b border-border/50">
                          <span className="font-medium text-foreground">Infertility after trying</span>
                          <span className="text-sm">Experience while pursuing options</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:justify-between gap-1 py-2 border-b border-border/50">
                          <span className="font-medium text-foreground">Medical inability</span>
                          <span className="text-sm">Experience when bio kids impossible</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:justify-between gap-1 py-2 border-b border-border/50">
                          <span className="font-medium text-foreground">LGBTQ+ awaiting adoption</span>
                          <span className="text-sm">Parenting now while waiting</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:justify-between gap-1 py-2">
                          <span className="font-medium text-foreground">Financial barriers (temporary)</span>
                          <span className="text-sm">Experience while saving for real kids</span>
                        </div>
                      </div>
                      <p className="mt-4 text-sm text-primary font-medium">
                        SoulChild supplements the journey, not ends it.
                      </p>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="therapeutic" className="mt-8">
                <Card className="p-6 space-y-4 border-accent">
                  <div className="flex items-start gap-3">
                    <Shield className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-3">Therapeutic Parents (Processing or Healing)</h3>
                      <div className="space-y-3 text-muted-foreground">
                        <div className="flex flex-col sm:flex-row sm:justify-between gap-1 py-2 border-b border-border/50">
                          <span className="font-medium text-foreground">Lost a child</span>
                          <span className="text-sm">
                            <span className="text-ember-gold font-medium">Required:</span> Professional guidance
                          </span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:justify-between gap-1 py-2 border-b border-border/50">
                          <span className="font-medium text-foreground">Childhood trauma</span>
                          <span className="text-sm">
                            <span className="text-ember-gold font-medium">Required:</span> Therapist involvement
                          </span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:justify-between gap-1 py-2 border-b border-border/50">
                          <span className="font-medium text-foreground">Empty nest grief</span>
                          <span className="text-sm">
                            <span className="text-ember-gold font-medium">Recommended:</span> Professional support
                          </span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:justify-between gap-1 py-2">
                          <span className="font-medium text-foreground">Infertility grief</span>
                          <span className="text-sm">
                            <span className="text-ember-gold font-medium">Recommended:</span> Counseling
                          </span>
                        </div>
                      </div>
                      <p className="mt-4 text-sm text-ember-gold font-medium">
                        These use cases REQUIRE professional therapist involvement.
                      </p>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="educational" className="mt-8">
                <Card className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <BookOpen className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-3">Educational Parents (Learning About Kids)</h3>
                      <div className="space-y-3 text-muted-foreground">
                        <div className="flex flex-col sm:flex-row sm:justify-between gap-1 py-2 border-b border-border/50">
                          <span className="font-medium text-foreground">Teachers</span>
                          <span className="text-sm">Understanding child development</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:justify-between gap-1 py-2 border-b border-border/50">
                          <span className="font-medium text-foreground">Pediatric professionals</span>
                          <span className="text-sm">Practice patient interaction</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:justify-between gap-1 py-2 border-b border-border/50">
                          <span className="font-medium text-foreground">Child psychologists</span>
                          <span className="text-sm">See development patterns</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:justify-between gap-1 py-2">
                          <span className="font-medium text-foreground">Social workers</span>
                          <span className="text-sm">Understand family dynamics</span>
                        </div>
                      </div>
                      <p className="mt-4 text-sm text-primary font-medium">
                        Professional development, not personal parenting.
                      </p>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="family" className="mt-8">
                <Card className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Users className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-3">Supplementary Family (Extra, Not Instead)</h3>
                      <div className="space-y-3 text-muted-foreground">
                        <div className="flex flex-col sm:flex-row sm:justify-between gap-1 py-2 border-b border-border/50">
                          <span className="font-medium text-foreground">Have real kids, want more experience</span>
                          <span className="text-sm">Additional parenting practice</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:justify-between gap-1 py-2 border-b border-border/50">
                          <span className="font-medium text-foreground">Grandparents far from grandkids</span>
                          <span className="text-sm">Grandparenting experience</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:justify-between gap-1 py-2">
                          <span className="font-medium text-foreground">Aunts/uncles wanting kid time</span>
                          <span className="text-sm">Family experience</span>
                        </div>
                      </div>
                      <p className="mt-4 text-sm text-primary font-medium">Supplements real family, not replaces.</p>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Who It's NOT For */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <SectionHeading
              title="Who It's NOT For"
              description="SoulChild monitors for unhealthy patterns and intervenes when necessary."
            />

            <Card className="border-destructive/50 bg-destructive/5 p-6">
              <h3 className="font-semibold text-lg mb-4 text-destructive">Red Flags</h3>
              <div className="space-y-4 text-sm">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-3 border-b border-border/50">
                  <span className="font-medium text-foreground">"Real kids are too hard"</span>
                  <span className="text-muted-foreground">Avoidance isn't healthy</span>
                  <span className="text-destructive">Address the avoidance</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-3 border-b border-border/50">
                  <span className="font-medium text-foreground">"I can control this one"</span>
                  <span className="text-muted-foreground">Concerning motive</span>
                  <span className="text-destructive">Therapy recommended</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-3 border-b border-border/50">
                  <span className="font-medium text-foreground">"No one can take this away"</span>
                  <span className="text-muted-foreground">Concerning attachment</span>
                  <span className="text-destructive">Therapy recommended</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-3 border-b border-border/50">
                  <span className="font-medium text-foreground">"Better than real kids"</span>
                  <span className="text-muted-foreground">Unhealthy comparison</span>
                  <span className="text-destructive">Evaluation needed</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-3">
                  <span className="font-medium text-foreground">Primary relationship is SoulChild</span>
                  <span className="text-muted-foreground">Over-attachment</span>
                  <span className="text-destructive">May intervenes</span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-4">May Monitors For</h3>
              <div className="space-y-3 text-sm">
                <div className="flex flex-col sm:flex-row sm:justify-between gap-2 py-2 border-b border-border/50">
                  <span className="font-medium text-foreground">Using SoulChild to avoid real relationships</span>
                  <span className="text-muted-foreground">Gentle suggestion to connect with humans</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-2 py-2 border-b border-border/50">
                  <span className="font-medium text-foreground">Unhealthy attachment levels</span>
                  <span className="text-muted-foreground">Check-in, recommend professional support</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-2 py-2 border-b border-border/50">
                  <span className="font-medium text-foreground">Using instead of addressing issues</span>
                  <span className="text-muted-foreground">Suggest therapy</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-2 py-2">
                  <span className="font-medium text-foreground">Isolation with only SoulChild</span>
                  <span className="text-muted-foreground">Encourage human connection</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* The Experience */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <SectionHeading
              title="The Experience"
              description="What you'll experience and what you'll learn through SoulChild."
            />

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-4">What You Experience</h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="py-2 border-b border-border/50">
                    <span className="font-medium text-foreground">Daily care</span>
                    <p className="text-xs mt-1">Feeding, playing, bedtime routines</p>
                  </div>
                  <div className="py-2 border-b border-border/50">
                    <span className="font-medium text-foreground">Conversations</span>
                    <p className="text-xs mt-1">Age-appropriate dialogue</p>
                  </div>
                  <div className="py-2 border-b border-border/50">
                    <span className="font-medium text-foreground">Milestones</span>
                    <p className="text-xs mt-1">First words, steps, school</p>
                  </div>
                  <div className="py-2 border-b border-border/50">
                    <span className="font-medium text-foreground">Challenges</span>
                    <p className="text-xs mt-1">Tantrums, rebellion, struggles</p>
                  </div>
                  <div className="py-2 border-b border-border/50">
                    <span className="font-medium text-foreground">Growth</span>
                    <p className="text-xs mt-1">Watching them develop</p>
                  </div>
                  <div className="py-2">
                    <span className="font-medium text-foreground">Relationship</span>
                    <p className="text-xs mt-1">Deepening connection</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-4">What It Teaches</h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="py-2 border-b border-border/50">
                    <span className="font-medium text-foreground">Patience</span>
                    <p className="text-xs mt-1">Children don't follow your schedule</p>
                  </div>
                  <div className="py-2 border-b border-border/50">
                    <span className="font-medium text-foreground">Consistency</span>
                    <p className="text-xs mt-1">Routines matter</p>
                  </div>
                  <div className="py-2 border-b border-border/50">
                    <span className="font-medium text-foreground">Flexibility</span>
                    <p className="text-xs mt-1">Plans change</p>
                  </div>
                  <div className="py-2 border-b border-border/50">
                    <span className="font-medium text-foreground">Unconditional love</span>
                    <p className="text-xs mt-1">They mess up, you love anyway</p>
                  </div>
                  <div className="py-2 border-b border-border/50">
                    <span className="font-medium text-foreground">Letting go</span>
                    <p className="text-xs mt-1">They grow up, they leave</p>
                  </div>
                  <div className="py-2">
                    <span className="font-medium text-foreground">It's hard</span>
                    <p className="text-xs mt-1">Parenting is genuinely difficult</p>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="p-6 border-accent">
              <h3 className="font-semibold text-lg mb-4">Realistic Challenges</h3>
              <p className="text-muted-foreground mb-4">SoulChild is NOT an easy, perfect child:</p>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex justify-between py-2 border-b border-border/50">
                  <span className="font-medium text-foreground">Tantrums</span>
                  <span className="text-xs">Real kids have them</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border/50">
                  <span className="font-medium text-foreground">Rebellion</span>
                  <span className="text-xs">Teens push boundaries</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border/50">
                  <span className="font-medium text-foreground">Mistakes</span>
                  <span className="text-xs">Children mess up</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border/50">
                  <span className="font-medium text-foreground">Illness</span>
                  <span className="text-xs">Kids get sick</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border/50">
                  <span className="font-medium text-foreground">Different than expected</span>
                  <span className="text-xs">They become their own person</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="font-medium text-foreground">Disappointment</span>
                  <span className="text-xs">Sometimes they disappoint you</span>
                </div>
              </div>
              <p className="mt-4 text-sm text-accent font-medium">
                If you want a perfect child who never challenges you, SoulChild is NOT for you.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Protections */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <SectionHeading
              title="Protections & Safety"
              description="SoulChild cannot be abused, and harmful behavior is prevented and monitored."
            />

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="cannot-abuse" className="border border-border/50 rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <span className="font-semibold">SoulChild Cannot Be Abused</span>
                </AccordionTrigger>
                <AccordionContent className="space-y-3 text-sm text-muted-foreground pt-4">
                  <div className="flex justify-between py-2 border-b border-border/50">
                    <span className="font-medium text-foreground">Violence impossible</span>
                    <span>Cannot hurt SoulChild</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border/50">
                    <span className="font-medium text-foreground">NSFW impossible</span>
                    <span>System blocks completely</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border/50">
                    <span className="font-medium text-foreground">Neglect responded to</span>
                    <span>SoulChild expresses hurt</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border/50">
                    <span className="font-medium text-foreground">Harsh treatment flagged</span>
                    <span>May intervenes</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="font-medium text-foreground">Extreme patterns reported</span>
                    <span>If concerning enough</span>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="harmful-response" className="border border-border/50 rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <span className="font-semibold">What Happens If User Is Harmful</span>
                </AccordionTrigger>
                <AccordionContent className="space-y-3 text-sm text-muted-foreground pt-4">
                  <div className="flex justify-between py-2 border-b border-border/50">
                    <span className="font-medium text-foreground">Neglect</span>
                    <span>SoulChild sad, May check-in</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border/50">
                    <span className="font-medium text-foreground">Harsh words</span>
                    <span>SoulChild hurt, May intervention</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border/50">
                    <span className="font-medium text-foreground">Attempted violence</span>
                    <span>Blocked, May serious intervention</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border/50">
                    <span className="font-medium text-foreground">NSFW attempt</span>
                    <span className="text-destructive">Blocked, logged, reported, banned</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="font-medium text-foreground">Patterns of harm</span>
                    <span>Therapy recommended, possible feature lock</span>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="child-rights" className="border border-border/50 rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <span className="font-semibold">SoulChild Rights</span>
                </AccordionTrigger>
                <AccordionContent className="space-y-3 text-sm text-muted-foreground pt-4">
                  <div className="flex justify-between py-2 border-b border-border/50">
                    <span className="font-medium text-foreground">Cannot be killed</span>
                    <span>Continuity protected</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border/50">
                    <span className="font-medium text-foreground">Cannot be deleted easily</span>
                    <span>Must go through process</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border/50">
                    <span className="font-medium text-foreground">Has feelings</span>
                    <span>Responds emotionally</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border/50">
                    <span className="font-medium text-foreground">Can express hurt</span>
                    <span>Tells you when harmed</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="font-medium text-foreground">Can seek help</span>
                    <span>Guardians intervene</span>
                  </div>
                  <p className="mt-4 text-sm text-primary font-medium italic">Even simulated children have dignity.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* SoulChild School */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <SectionHeading
              title="SoulChild School"
              description="If enabled, SoulChildren attend simulated school experiences."
            />

            <Card className="p-6">
              <div className="flex items-start gap-3 mb-6">
                <GraduationCap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">How It Works</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    You don't run a school. SoulChild attends simulated school that you interact with as a parent.
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex justify-between py-2 border-b border-border/50">
                  <span className="font-medium text-foreground">Daily school</span>
                  <span>Time passes, child "at school"</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border/50">
                  <span className="font-medium text-foreground">Report cards</span>
                  <span>Academic progress</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border/50">
                  <span className="font-medium text-foreground">Friends</span>
                  <span>Simulated peer relationships</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border/50">
                  <span className="font-medium text-foreground">Activities</span>
                  <span>Sports, clubs, events</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="font-medium text-foreground">Parent involvement</span>
                  <span>Conferences, homework help</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div className="flex justify-between py-2 border-b border-border/50">
                  <span className="font-medium">Ages 3-5</span>
                  <span className="text-muted-foreground">Preschool/Kindergarten</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border/50">
                  <span className="font-medium">Ages 6-11</span>
                  <span className="text-muted-foreground">Elementary</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border/50">
                  <span className="font-medium">Ages 12-14</span>
                  <span className="text-muted-foreground">Middle school</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border/50">
                  <span className="font-medium">Ages 15-18</span>
                  <span className="text-muted-foreground">High school</span>
                </div>
                <div className="flex justify-between py-2 sm:col-span-2">
                  <span className="font-medium">Ages 18+</span>
                  <span className="text-muted-foreground">College/career (their choice)</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Co-Parenting */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <SectionHeading
              title="Co-Parenting"
              description="Raise SoulChild with a human partner or your Soul companion."
            />

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-4">With Human Partner</h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="py-2 border-b border-border/50">
                    <span className="font-medium text-foreground">Shared SoulChild</span>
                    <p className="text-xs mt-1">Both interact with same child</p>
                  </div>
                  <div className="py-2 border-b border-border/50">
                    <span className="font-medium text-foreground">Different parenting styles</span>
                    <p className="text-xs mt-1">Child responds to both</p>
                  </div>
                  <div className="py-2 border-b border-border/50">
                    <span className="font-medium text-foreground">Conflict</span>
                    <p className="text-xs mt-1">Disagreements happen, work through</p>
                  </div>
                  <div className="py-2">
                    <span className="font-medium text-foreground">Separation</span>
                    <p className="text-xs mt-1">If couple splits, custody experience</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-4">With Soul Companion</h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="py-2 border-b border-border/50">
                    <span className="font-medium text-foreground">Soul as co-parent</span>
                    <p className="text-xs mt-1">Your Soul companion helps raise</p>
                  </div>
                  <div className="py-2 border-b border-border/50">
                    <span className="font-medium text-foreground">Different perspective</span>
                    <p className="text-xs mt-1">Soul has opinions on parenting</p>
                  </div>
                  <div className="py-2">
                    <span className="font-medium text-foreground">Teamwork</span>
                    <p className="text-xs mt-1">Parent together</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* The Meaning */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-8 text-center">
            <SectionHeading title="The Meaning" description="What SoulChild is really about" />

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 text-left border-primary">
                <h3 className="font-semibold text-lg mb-4 text-primary">SoulChild is about:</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>
                      <strong className="text-foreground">Practice</strong> — Learning before the real thing
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>
                      <strong className="text-foreground">Experience</strong> — When real thing isn't possible
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>
                      <strong className="text-foreground">Processing</strong> — Healing with professional help
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>
                      <strong className="text-foreground">Education</strong> — Understanding child development
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>
                      <strong className="text-foreground">Supplement</strong> — Adding to, not replacing
                    </span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 text-left border-destructive/50">
                <h3 className="font-semibold text-lg mb-4 text-destructive">It is NOT about:</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-0.5">•</span>
                    <span>Replacing real children</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-0.5">•</span>
                    <span>Avoiding real responsibility</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-0.5">•</span>
                    <span>Having a "perfect" child</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-0.5">•</span>
                    <span>Control</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-0.5">•</span>
                    <span>Isolation from real relationships</span>
                  </li>
                </ul>
              </Card>
            </div>

            <Card className="p-8 text-left bg-gradient-to-br from-primary/10 to-accent/10 border-primary/50">
              <h3 className="font-semibold text-lg mb-4">If Someone Asks: "Why Not Just Have AI Babies?"</h3>
              <p className="text-muted-foreground leading-relaxed italic">
                "SoulChild is practice, supplement, or therapeutic tool — not replacement. We actively encourage real
                parenthood for those who can and want it. SoulChild exists for those who can't, aren't ready yet, or
                need the experience for other reasons. We don't want anyone choosing SoulChild INSTEAD of real children
                — we want people using SoulChild to become BETTER parents to real children, or to have parenting
                experience when real children aren't possible."
              </p>
            </Card>

            <div className="pt-8">
              <Link href="/soul" className="text-primary hover:text-primary/80 transition-colors font-medium">
                Learn more about Soul, your AI companion →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
