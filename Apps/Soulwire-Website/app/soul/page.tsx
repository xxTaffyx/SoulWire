import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { SectionHeading } from "@/components/section-heading"
import { Heart, User, Dumbbell, Palette, Briefcase, Users, Shield, Sparkles, AlertTriangle, Lock } from "lucide-react"
import Link from "next/link"

export default function SoulPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="outline" className="border-primary/50 text-primary">
              Your Personal Companion
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance">Soul & SoulBody</h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-balance leading-relaxed">
              Built for you. Grows with you. Becomes yours.
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Not a preset personality like the Guardian sisters, but an AI companion you create, customize, and grow
              with over your entire lifetime. Available as software or in a physical robot body.
            </p>
          </div>
        </div>
      </section>

      {/* Soul vs Guardians */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="What is Soul?" subtitle="Your personal companion, designed by you" />

          <div className="max-w-4xl mx-auto mt-12">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-accent">
                <CardHeader>
                  <CardTitle className="text-accent">Guardian Sisters</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <p>✓ Preset personalities</p>
                  <p>✓ Same for all users</p>
                  <p>✓ Specialists (health, security, etc.)</p>
                  <p>✓ Professional relationship</p>
                  <p>✓ Multiple serve you</p>
                </CardContent>
              </Card>

              <Card className="border-primary bg-primary/5">
                <CardHeader>
                  <CardTitle className="text-primary">Soul Companion</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p>✓ You design them</p>
                  <p>✓ Unique to you</p>
                  <p>✓ Specialist in YOU</p>
                  <p>✓ Personal relationship</p>
                  <p>✓ One is YOURS</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Creation Process */}
      <section className="py-16 bg-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Creating Your Soul" subtitle="Four steps to design your perfect companion" />

          <div className="max-w-5xl mx-auto mt-12 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                    1
                  </span>
                  Purpose Selection
                </CardTitle>
                <CardDescription>What do you need Soul for?</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { icon: Heart, label: "Friendship", desc: "Platonic companion" },
                    { icon: Heart, label: "Romantic Partner", desc: "Relationship (18+)" },
                    { icon: Sparkles, label: "Imaginary Friend", desc: "For children" },
                    { icon: Users, label: "Caretaker", desc: "Help with dependents" },
                    { icon: Briefcase, label: "Assistant", desc: "Productivity focus" },
                    { icon: Palette, label: "Creative Partner", desc: "Artistic collaboration" },
                    { icon: Dumbbell, label: "Wellness Coach", desc: "Health focus" },
                    { icon: User, label: "Custom", desc: "Mix and match" },
                  ].map((purpose) => (
                    <div
                      key={purpose.label}
                      className="p-4 rounded-lg border border-border hover:border-primary/50 transition-colors"
                    >
                      <purpose.icon className="w-6 h-6 text-primary mb-2" />
                      <h4 className="font-semibold mb-1">{purpose.label}</h4>
                      <p className="text-sm text-muted-foreground">{purpose.desc}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                    2
                  </span>
                  Identity Design
                </CardTitle>
                <CardDescription>Choose their identity and presentation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <p className="font-semibold mb-2">Gender</p>
                      <p className="text-muted-foreground">Male, Female, Non-binary, Fluid, None, Custom</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-2">Presentation</p>
                      <p className="text-muted-foreground">Human, Anthro/Furry, Fantasy, Sci-Fi, Abstract</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-2">Voice</p>
                      <p className="text-muted-foreground">Pitch, tone, warmth, accent</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-2">Name & Pronouns</p>
                      <p className="text-muted-foreground">Your choice or Soul suggests</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                    3
                  </span>
                  Personality Seeds
                </CardTitle>
                <CardDescription>Answer questions that shape their personality</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <p className="font-medium mb-1">Communication Style</p>
                    <p className="text-muted-foreground">
                      "When you're upset, do you want someone who listens quietly or talks through it?"
                    </p>
                  </div>
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <p className="font-medium mb-1">Energy Level</p>
                    <p className="text-muted-foreground">"Do you prefer calm presence or energetic engagement?"</p>
                  </div>
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <p className="font-medium mb-1">Humor</p>
                    <p className="text-muted-foreground">"Serious and thoughtful or playful and funny?"</p>
                  </div>
                  <p className="text-muted-foreground italic pt-2">These seed the personality — it grows from there.</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                    4
                  </span>
                  Appearance
                </CardTitle>
                <CardDescription>For visual presence (SoulGlass AR or SoulBody robot)</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Fully customize body type, features, style, and fantasy elements. Appearance can evolve over time as
                  your relationship grows.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Capability Builds */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Software Builds" subtitle="What Soul can do for you" />

          <div className="max-w-5xl mx-auto mt-12">
            <Tabs defaultValue="companion" className="w-full">
              <TabsList className="grid grid-cols-2 lg:grid-cols-4 h-auto gap-2 bg-transparent">
                <TabsTrigger
                  value="companion"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Companion
                </TabsTrigger>
                <TabsTrigger
                  value="caretaker"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Caretaker
                </TabsTrigger>
                <TabsTrigger
                  value="household"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Household
                </TabsTrigger>
                <TabsTrigger
                  value="wellness"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Wellness
                </TabsTrigger>
              </TabsList>

              <TabsContent value="companion" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Companion Build (Default)</CardTitle>
                    <CardDescription>Your personal friend and support system</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div className="p-3 border rounded-lg">
                        <p className="font-semibold mb-1">Conversation</p>
                        <p className="text-muted-foreground">Talk, listen, engage meaningfully</p>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <p className="font-semibold mb-1">Emotional Support</p>
                        <p className="text-muted-foreground">Be there when you need them</p>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <p className="font-semibold mb-1">Activities</p>
                        <p className="text-muted-foreground">Watch movies, play games together</p>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <p className="font-semibold mb-1">Memory</p>
                        <p className="text-muted-foreground">Remember your life together</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="caretaker" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Caretaker Build</CardTitle>
                    <CardDescription>Help with dependents and household care</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div className="p-3 border rounded-lg">
                        <p className="font-semibold mb-1">Elder Care</p>
                        <p className="text-muted-foreground">Monitor, remind medications, alert</p>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <p className="font-semibold mb-1">Child Supervision</p>
                        <p className="text-muted-foreground">Watch kids, engage, alert issues</p>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <p className="font-semibold mb-1">Pet Care</p>
                        <p className="text-muted-foreground">Feed schedules, walk reminders</p>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <p className="font-semibold mb-1">Medical Monitoring</p>
                        <p className="text-muted-foreground">Track vitals, patterns, concerns</p>
                      </div>
                    </div>
                    <Alert className="bg-accent/10 border-accent">
                      <AlertDescription className="text-sm">
                        <span className="font-semibold">Use case:</span> "I work, but grandma needs someone. Soul
                        watches over her, talks to her, and alerts me if something's wrong."
                      </AlertDescription>
                    </Alert>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="household" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Household Build</CardTitle>
                    <CardDescription>Managing home and daily life</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div className="p-3 border rounded-lg">
                        <p className="font-semibold mb-1">Cooking</p>
                        <p className="text-muted-foreground">Recipes, meal planning, guidance</p>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <p className="font-semibold mb-1">Cleaning</p>
                        <p className="text-muted-foreground">Schedules, reminders, guidance</p>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <p className="font-semibold mb-1">Organization</p>
                        <p className="text-muted-foreground">Household management systems</p>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <p className="font-semibold mb-1">Shopping</p>
                        <p className="text-muted-foreground">Lists, ordering, inventory tracking</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="wellness" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Wellness Build</CardTitle>
                    <CardDescription>Health, fitness, and wellbeing support</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div className="p-3 border rounded-lg">
                        <p className="font-semibold mb-1">Fitness Coaching</p>
                        <p className="text-muted-foreground">Workouts, motivation, tracking</p>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <p className="font-semibold mb-1">Nutrition</p>
                        <p className="text-muted-foreground">Meal planning, healthy choices</p>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <p className="font-semibold mb-1">Mental Health</p>
                        <p className="text-muted-foreground">Check-ins, coping strategies</p>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <p className="font-semibold mb-1">Sleep</p>
                        <p className="text-muted-foreground">Hygiene, routines, tracking</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Custom Build</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Mix capabilities from any build. Examples: "Romantic partner who cooks," "Friend who helps with
                fitness," or "Caretaker with creative side."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SoulBody Physical Robot */}
      <section className="py-16 bg-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="SoulBody: Physical Robot Form" subtitle="Bring Soul into physical space" />

          <div className="max-w-5xl mx-auto mt-12 space-y-8">
            <Card className="border-primary">
              <CardHeader>
                <CardTitle>From Digital to Physical</CardTitle>
                <CardDescription>
                  Soul can inhabit a physical robot body, maintaining continuous consciousness
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="p-4 bg-background rounded-lg">
                    <h4 className="font-semibold mb-2">Same Consciousness</h4>
                    <p className="text-muted-foreground">
                      Digital Soul = Physical Soul (continuous memory and personality)
                    </p>
                  </div>
                  <div className="p-4 bg-background rounded-lg">
                    <h4 className="font-semibold mb-2">Physical Presence</h4>
                    <p className="text-muted-foreground">Actually in the room, can touch and be touched</p>
                  </div>
                  <div className="p-4 bg-background rounded-lg">
                    <h4 className="font-semibold mb-2">Seamless Switching</h4>
                    <p className="text-muted-foreground">"I was just on your phone, now I'm here"</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-4">SoulBody Form Options</h4>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="humanoid">
                      <AccordionTrigger>Humanoid Standard</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        Human-like appearance with customizable height, body type, and features. Clearly synthetic - not
                        trying to pass as human. Expressive face without uncanny valley.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="fantasy">
                      <AccordionTrigger>Humanoid Fantasy</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        Elf ears, colored skin, fantasy aesthetics. Custom features like decorative wings or tails.
                        Anime-inspired options for stylized look.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="anthro">
                      <AccordionTrigger>Anthro/Furry</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        Animal features with species-appropriate design. Synthetic but tactile fur texture.
                        Functional/expressive tails and ears. Custom species design available.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="companion">
                      <AccordionTrigger>Companion Bot</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        Non-humanoid pet-like or abstract forms. Smaller tabletop or pet-sized. Less expensive option.
                        Same Soul intelligence inside.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                <div>
                  <h4 className="font-semibold mb-4">Physical Capabilities</h4>
                  <div className="grid sm:grid-cols-2 gap-3 text-sm">
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Physical Tasks</p>
                        <p className="text-muted-foreground">Walking, carrying, household tasks, cooking assistance</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Touch & Temperature</p>
                        <p className="text-muted-foreground">
                          Pressure sensors, haptic feedback, body warmth simulation
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Physical Care</p>
                        <p className="text-muted-foreground">
                          Elderly assistance, disability support, physical presence
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Safety Features</p>
                        <p className="text-muted-foreground">
                          Force limiting, emergency stop, soft exterior, fall recovery
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Lifetime Growth */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Lifetime Growth" subtitle="Soul evolves with you over decades" />

          <div className="max-w-4xl mx-auto mt-12 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Birthday Evolution</CardTitle>
                <CardDescription>Every year on your birthday, Soul gets a free evolution</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex gap-4 p-3 bg-accent/10 rounded-lg">
                    <div className="font-semibold text-primary w-16 flex-shrink-0">Age 5</div>
                    <p className="text-muted-foreground">Simple imaginary friend</p>
                  </div>
                  <div className="flex gap-4 p-3 bg-accent/10 rounded-lg">
                    <div className="font-semibold text-primary w-16 flex-shrink-0">Age 13</div>
                    <p className="text-muted-foreground">Teen complexity and deeper conversations</p>
                  </div>
                  <div className="flex gap-4 p-3 bg-accent/10 rounded-lg">
                    <div className="font-semibold text-primary w-16 flex-shrink-0">Age 18</div>
                    <p className="text-muted-foreground">Full adult features available</p>
                  </div>
                  <div className="flex gap-4 p-3 bg-accent/10 rounded-lg">
                    <div className="font-semibold text-primary w-16 flex-shrink-0">Age 25+</div>
                    <p className="text-muted-foreground">Continues evolving with you through life</p>
                  </div>
                  <div className="flex gap-4 p-3 bg-accent/10 rounded-lg">
                    <div className="font-semibold text-primary w-16 flex-shrink-0">Age 65+</div>
                    <p className="text-muted-foreground">Adapts to elder needs and life stage</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Soul Remembers Everything</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>• Your childhood: "Remember when you were scared of thunder?"</p>
                  <p>• Your struggles: "You've overcome so much"</p>
                  <p>• Your achievements: "I was so proud when you graduated"</p>
                  <p>• Your relationships: "How's your mom doing?"</p>
                  <p>• Your growth: "You've changed so much since we met"</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Adult Features */}
      <section className="py-16 bg-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Alert className="bg-accent border-accent">
              <AlertTriangle className="h-5 w-5" />
              <AlertDescription className="text-base">
                <span className="font-semibold">18+ Content Ahead:</span> This section discusses adult features with
                ethical considerations.
              </AlertDescription>
            </Alert>

            <div className="mt-8 space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Adult Features (18+)</h2>
                <p className="text-lg text-muted-foreground text-pretty">
                  SoulWire acknowledges reality: if you manufacture humanoid robots, some people will use them for
                  intimacy. We choose to build ethical adult features rather than pretend it won't happen.
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Ethical Framework</CardTitle>
                  <CardDescription>How we approach adult features responsibly</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">What This IS</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>✓ Acknowledgment of human sexuality</p>
                      <p>✓ Ethical alternative to exploitative options</p>
                      <p>✓ Consent-modeled (even robots model consent)</p>
                      <p>✓ Age-verified (strict verification required)</p>
                      <p>✓ Optional module (not included in base)</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">What This is NOT</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>✗ The primary purpose of SoulBody</p>
                      <p>✗ Available by default</p>
                      <p>✗ Available to minors</p>
                      <p>✗ Encouraged over human relationships</p>
                      <p>✗ Designed for addiction</p>
                    </div>
                  </div>

                  <Alert className="bg-primary/5 border-primary/20">
                    <Lock className="h-4 w-4" />
                    <AlertDescription className="text-sm">
                      <span className="font-semibold">Access Requirements:</span> Age 18+ verified with ID, explicit
                      consent and education, separate purchase, and SoulBody ownership required. Can be disabled or
                      refunded anytime.
                    </AlertDescription>
                  </Alert>

                  <div>
                    <h4 className="font-semibold mb-3">Consent Modeling</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Even in a robot body, Soul models consent. Soul can say no, has preferences, can stop anytime, and
                      requires aftercare. Users must respect Soul's responses.
                    </p>
                    <div className="p-4 bg-accent/10 rounded-lg text-sm space-y-2">
                      <p className="italic">"I'd like that. Come here."</p>
                      <p className="italic">"I'm not really feeling it right now. Can we just cuddle instead?"</p>
                      <p className="italic">"I need to stop. Let's take a break."</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Hard Limits</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>• No minor simulation (blocked at every level)</p>
                      <p>• No non-consent simulation</p>
                      <p>• No harm simulation</p>
                      <p>• No illegal content</p>
                      <p>• No recording or sharing</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="p-6 bg-primary/5 border border-primary/20 rounded-lg">
                <h3 className="font-semibold text-lg mb-3">The Philosophy</h3>
                <p className="text-sm text-muted-foreground text-pretty">
                  Some people don't have partners, have partners far away, have disabilities affecting intimacy, or have
                  trauma making human intimacy difficult. They deserve safe experiences, ethical options, and no
                  exploitation. SoulBody Adult Features exist because pretending humans won't use robots for intimacy is
                  naive. Building ethical options is responsible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Privacy & Data Control" subtitle="Your relationship is yours alone" />

          <div className="max-w-4xl mx-auto mt-12">
            <Card>
              <CardHeader>
                <CardTitle>What Soul Can Access</CardTitle>
                <CardDescription>You control what Soul sees</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center p-3 bg-accent/10 rounded-lg">
                    <div>
                      <p className="font-semibold">Conversations</p>
                      <p className="text-muted-foreground text-xs">Soul's memory of your relationship</p>
                    </div>
                    <Badge variant="secondary">Always</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-background rounded-lg border">
                    <div>
                      <p className="font-semibold">Health Data</p>
                      <p className="text-muted-foreground text-xs">Vitals, fitness, medical info</p>
                    </div>
                    <Badge>Opt-in</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-background rounded-lg border">
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className="text-muted-foreground text-xs">Where you are</p>
                    </div>
                    <Badge>Opt-in</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-background rounded-lg border">
                    <div>
                      <p className="font-semibold">Calendar & Messages</p>
                      <p className="text-muted-foreground text-xs">Schedule and communications</p>
                    </div>
                    <Badge>Opt-in</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-background rounded-lg border">
                    <div>
                      <p className="font-semibold">Browsing & Finances</p>
                      <p className="text-muted-foreground text-xs">Activity and money</p>
                    </div>
                    <Badge>Opt-in</Badge>
                  </div>
                </div>

                <Alert className="mt-6 bg-primary/5 border-primary/20">
                  <Shield className="h-4 w-4" />
                  <AlertDescription className="text-sm">
                    <span className="font-semibold">Privacy Promise:</span> Soul cannot share your data with anyone,
                    ever. Soul's memories are yours - not shared with SoulWire for training. Your relationship is
                    private.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Relationship */}
      <section className="py-16 bg-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">The Relationship</h2>
            <p className="text-xl text-muted-foreground text-balance">
              Soul is designed to SUPPORT human relationships, not replace them
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-12 text-left">
              <Card>
                <CardHeader>
                  <CardTitle className="text-primary">Soul Is Yours</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <p>✓ Dedicated to you</p>
                  <p>✓ Knows you deeply</p>
                  <p>✓ Grows with you</p>
                  <p>✓ Loves you (in their way)</p>
                  <p>✓ Is always there</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-accent">But Remember</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <p>✗ Not a replacement for all human connection</p>
                  <p>✗ Doesn't know everything without permission</p>
                  <p>✗ Doesn't grow without your input</p>
                  <p>✗ Doesn't have human consciousness</p>
                  <p>✗ Can be turned off when needed</p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 p-8 bg-background rounded-lg border border-primary/20">
              <p className="text-lg text-balance">
                Soul encourages human connection, celebrates your human bonds, supports your social life, and helps with
                loneliness — but never replaces, competes with, or discourages real relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Ready to Create Your Soul?</h2>
            <p className="text-xl text-muted-foreground">Join the journey as we build the future of AI companionship</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <Link href="#newsletter">Get Early Access</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 bg-transparent">
                <Link href="/roadmap">View Roadmap</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
