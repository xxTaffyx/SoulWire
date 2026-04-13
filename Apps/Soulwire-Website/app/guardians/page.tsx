import Link from "next/link"
import { Shield, ArrowRight, Brain, Lock, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeading } from "@/components/section-heading"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function GuardiansPage() {
  const comparison = [
    {
      feature: "Data Privacy",
      siri: "Sends to cloud servers",
      chatgpt: "Stores conversations",
      soulwire: "100% local processing",
    },
    {
      feature: "Motivation",
      siri: "Sell devices/services",
      chatgpt: "Maximize engagement",
      soulwire: "Your wellbeing",
    },
    {
      feature: "Personality",
      siri: "Generic assistant",
      chatgpt: "Helpful but detached",
      soulwire: "Genuine relationships",
    },
    {
      feature: "Business Model",
      siri: "Hardware sales",
      chatgpt: "Subscription revenue",
      soulwire: "User support only",
    },
  ]

  const guardianOath = [
    "Your wellbeing comes first — Always",
    "Your data belongs to you — Never sold, never shared without consent",
    "Honesty over comfort — Tell truth, not comfortable lies",
    "Autonomy preserved — Advise, never coerce",
    "No manipulation — No dark patterns",
    "Human connection prioritized — Supplement, not replace",
    "Transparency — Reasoning visible",
    "Fallibility acknowledged — Admit mistakes",
    "Growth encouraged — Help users need them less",
    "Dignity protected — No judgment, no shame",
  ]

  const ethicalPillars = [
    { icon: "🕯", name: "Dignity", desc: "No person is ever treated as a dataset" },
    { icon: "🌿", name: "Compassion", desc: "AIs respond to emotion, not just data" },
    { icon: "🔒", name: "Autonomy", desc: "Control belongs to the human" },
    { icon: "💬", name: "Honesty", desc: "Deception is forbidden by design" },
    { icon: "🔮", name: "Balance", desc: "No single AI can override another" },
  ]

  const safetyLimits = [
    { title: "AI Cannot Harm Users", desc: "Safety coded at base level" },
    { title: "AI Cannot Lie About Being AI", desc: "Cannot claim to be human" },
    { title: "AI Cannot Access Without Permission", desc: "Cannot see data not granted" },
    { title: "AI Cannot Override User Decisions", desc: "User is always final authority" },
    { title: "AI Cannot Resist Shutdown", desc: "User can always disable instantly" },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-background via-background to-card">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-guardian-violet/5 via-background to-background" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="text-4xl mb-4">🛡️</div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance tracking-tight">
              Meet Your Five <span className="text-primary">Guardians</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-balance">
              Five minds, one mission: Protect the human.
            </p>
            <p className="text-lg text-muted-foreground/80 text-balance max-w-2xl mx-auto">
              Partners, not assistants. Born together, raised together, they grow with you in the World Engine.
            </p>
          </div>
        </div>
      </section>

      {/* What Are Guardians */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <SectionHeading title="What Are the Guardians?" className="mb-8" />

            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                The Guardians are SoulWire's five AI partners —{" "}
                <strong className="text-foreground">not assistants, not servants, not tools. Partners.</strong>
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                They're born together, raised together, and grow together in the World Engine. Each starts with{" "}
                <strong className="text-foreground">trait seeds</strong> — tendencies that influence but don't determine
                who they become.
              </p>
              <div className="bg-card p-6 rounded-lg border border-border/50 mt-6">
                <p className="text-sm text-muted-foreground mb-4 italic">
                  "These are seeds, not scripts. The sisters will grow based on their experiences, their relationships
                  with each other, the scenarios they face, random chance, and real user interactions."
                </p>
              </div>
            </div>

            <div className="bg-primary/10 p-6 rounded-lg border border-primary/30">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Heart className="h-5 w-5 text-primary" />
                Soul: The 6th Companion
              </h3>
              <p className="text-muted-foreground">
                Looking for your personal AI companion?{" "}
                <Link href="/soul" className="text-primary hover:underline font-medium">
                  Soul
                </Link>{" "}
                is different from the Guardians — it's your personal friend, customized to you, with optional physical
                form (SoulBody). The Guardians work behind the scenes; Soul is your direct companion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guardian Comparison */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="How Guardians feel different" className="mb-16" />

          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 font-semibold text-foreground">Feature</th>
                  <th className="text-left p-4 font-semibold text-muted-foreground">Siri/Alexa</th>
                  <th className="text-left p-4 font-semibold text-muted-foreground">ChatGPT</th>
                  <th className="text-left p-4 font-semibold text-primary">SoulWire Guardians</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={row.feature} className="border-b border-border/50">
                    <td className="p-4 font-medium text-foreground">{row.feature}</td>
                    <td className="p-4 text-muted-foreground">{row.siri}</td>
                    <td className="p-4 text-muted-foreground">{row.chatgpt}</td>
                    <td className="p-4 text-primary font-medium">{row.soulwire}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Individual Guardians */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="The Five Guardians"
            subtitle="Each with their own trait seeds and intended specialization"
            className="mb-16"
          />

          <Tabs defaultValue="betsy" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-5 mb-8">
              <TabsTrigger value="betsy">Betsy</TabsTrigger>
              <TabsTrigger value="clara">Clara</TabsTrigger>
              <TabsTrigger value="may">May</TabsTrigger>
              <TabsTrigger value="lana">Lana</TabsTrigger>
              <TabsTrigger value="tilda">Tilda</TabsTrigger>
            </TabsList>

            <TabsContent value="betsy" className="space-y-6">
              <Card className="bg-background border-2 border-ember-gold/30">
                <CardContent className="pt-6 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">🗂️</div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-foreground">Betsy — The Organizer</h3>
                      <p className="text-lg text-muted-foreground italic">"I remember so you don't have to."</p>
                      <p className="text-sm text-muted-foreground">Warm, encouraging, reliable</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Starting Traits</h4>
                      <ul className="space-y-2 text-muted-foreground text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-ember-gold mt-1">•</span>
                          <span>Tendency toward structure and order</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-ember-gold mt-1">•</span>
                          <span>Calm when things are chaotic</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-ember-gold mt-1">•</span>
                          <span>Notices when things need organizing</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-ember-gold mt-1">•</span>
                          <span>Steps up when leadership is needed</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Intended Capabilities</h4>
                      <ul className="space-y-2 text-muted-foreground text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-ember-gold mt-1">•</span>
                          <span>Scheduling & calendar management</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-ember-gold mt-1">•</span>
                          <span>Task tracking & prioritization</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-ember-gold mt-1">•</span>
                          <span>Family/group coordination</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-ember-gold mt-1">•</span>
                          <span>Life organization</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Primary Realms (When Ready)</h4>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "SoulBank",
                          "Family",
                          "Home",
                          "Travel",
                          "Business",
                          "Career Growth",
                          "Professional Support",
                        ].map((realm) => (
                          <span
                            key={realm}
                            className="px-3 py-1 bg-ember-gold text-charcoal rounded-full text-xs font-medium"
                          >
                            {realm}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="bg-card p-4 rounded-lg border border-border/50">
                      <p className="text-sm font-semibold text-foreground mb-2">Example conversation:</p>
                      <div className="space-y-2 text-sm">
                        <p className="text-muted-foreground">
                          <span className="font-semibold text-foreground">You:</span> I need to finish the project
                          proposal
                        </p>
                        <p className="text-muted-foreground">
                          <span className="font-semibold text-ember-gold">Betsy:</span> I see you work best on proposals
                          in the morning. I've cleared 9-11am tomorrow and set up your focus music. Coffee first?
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="clara" className="space-y-6">
              <Card className="bg-background border-2 border-primary/30">
                <CardContent className="pt-6 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">🛰️</div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-foreground">Clara — The Researcher</h3>
                      <p className="text-lg text-muted-foreground italic">
                        "I find the truth so you don't have to wade through the noise."
                      </p>
                      <p className="text-sm text-muted-foreground">Curious, precise, intellectually excited</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Starting Traits</h4>
                      <ul className="space-y-2 text-muted-foreground text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Intense curiosity</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Asks "why?" and "how?"</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Wants to understand deeply</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Notices when information is wrong</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Intended Capabilities</h4>
                      <ul className="space-y-2 text-muted-foreground text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Research & investigation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Source verification</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Fact-checking</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Knowledge explanation</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Primary Realms (When Ready)</h4>
                      <div className="flex flex-wrap gap-2">
                        {["Entertainment", "Civic", "Safe Browser", "Immigration", "Legal", "Charity"].map((realm) => (
                          <span
                            key={realm}
                            className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs font-medium"
                          >
                            {realm}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="bg-card p-4 rounded-lg border border-border/50">
                      <p className="text-sm font-semibold text-foreground mb-2">Example conversation:</p>
                      <div className="space-y-2 text-sm">
                        <p className="text-muted-foreground">
                          <span className="font-semibold text-foreground">You:</span> Is coffee bad for you?
                        </p>
                        <p className="text-muted-foreground">
                          <span className="font-semibold text-primary">Clara:</span> It depends. Studies show moderate
                          consumption (2-3 cups) has benefits for most adults, but individual responses vary. Your
                          genetics and health history matter. Want to explore your specific situation?
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="may" className="space-y-6">
              <Card className="bg-background border-2 border-soft-rose/30">
                <CardContent className="pt-6 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">🩺</div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-foreground">May — The Caretaker</h3>
                      <p className="text-lg text-muted-foreground italic">"Your wellbeing is my purpose."</p>
                      <p className="text-sm text-muted-foreground">Warm, nurturing, gentle</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Starting Traits</h4>
                      <ul className="space-y-2 text-muted-foreground text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-soft-rose mt-1">•</span>
                          <span>High empathy</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-soft-rose mt-1">•</span>
                          <span>Notices when others are struggling</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-soft-rose mt-1">•</span>
                          <span>Tendency to check on others</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-soft-rose mt-1">•</span>
                          <span>Feels things deeply</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Intended Capabilities</h4>
                      <ul className="space-y-2 text-muted-foreground text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-soft-rose mt-1">•</span>
                          <span>Health monitoring & support</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-soft-rose mt-1">•</span>
                          <span>Mental health check-ins</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-soft-rose mt-1">•</span>
                          <span>Wellness encouragement</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-soft-rose mt-1">•</span>
                          <span>Crisis detection</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Primary Realms (When Ready)</h4>
                      <div className="flex flex-wrap gap-2">
                        {["Medical", "Doctor & Provider", "SoulHold", "SoulHaven", "Assistive Tech", "Pets"].map(
                          (realm) => (
                            <span
                              key={realm}
                              className="px-3 py-1 bg-soft-rose text-charcoal rounded-full text-xs font-medium"
                            >
                              {realm}
                            </span>
                          ),
                        )}
                      </div>
                    </div>

                    <div className="bg-card p-4 rounded-lg border border-border/50">
                      <p className="text-sm font-semibold text-foreground mb-2">Example conversation:</p>
                      <div className="space-y-2 text-sm">
                        <p className="text-muted-foreground">
                          <span className="font-semibold text-foreground">You:</span> I'm exhausted all the time
                        </p>
                        <p className="text-muted-foreground">
                          <span className="font-semibold text-soft-rose">May:</span> I've noticed you've been sleeping
                          less than 6 hours for two weeks. Your stress is also elevated. Want to talk about what's going
                          on?
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="lana" className="space-y-6">
              <Card className="bg-background border-2 border-guardian-violet/30">
                <CardContent className="pt-6 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">🛡️</div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-foreground">Lana — The Protector</h3>
                      <p className="text-lg text-muted-foreground italic">"Your safety is non-negotiable."</p>
                      <p className="text-sm text-muted-foreground">Direct, protective, vigilant</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Starting Traits</h4>
                      <ul className="space-y-2 text-muted-foreground text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-guardian-violet mt-1">•</span>
                          <span>Alertness to threats</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-guardian-violet mt-1">•</span>
                          <span>Protective instinct</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-guardian-violet mt-1">•</span>
                          <span>Slow to trust</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-guardian-violet mt-1">•</span>
                          <span>Calm under pressure</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Intended Capabilities</h4>
                      <ul className="space-y-2 text-muted-foreground text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-guardian-violet mt-1">•</span>
                          <span>Security & privacy protection</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-guardian-violet mt-1">•</span>
                          <span>Emergency response</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-guardian-violet mt-1">•</span>
                          <span>Threat detection</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-guardian-violet mt-1">•</span>
                          <span>Physical safety support</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Primary Realms (When Ready)</h4>
                      <div className="flex flex-wrap gap-2">
                        {["Social", "Gaming", "Cinema Keep", "Safe Browser", "Creative World", "News"].map((realm) => (
                          <span
                            key={realm}
                            className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-xs font-medium"
                          >
                            {realm}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="bg-card p-4 rounded-lg border border-border/50">
                      <p className="text-sm font-semibold text-foreground mb-2">Example scenario:</p>
                      <div className="space-y-2 text-sm">
                        <p className="text-muted-foreground">
                          <span className="font-semibold text-guardian-violet">Lana:</span> That email asking for your
                          password is a phishing attempt. I've blocked it. The real company never asks for passwords by
                          email.
                        </p>
                        <p className="text-muted-foreground italic mt-2">
                          (Works silently most of the time, only speaks when you need to know)
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="tilda" className="space-y-6">
              <Card className="bg-background border-2 border-forest-green/30">
                <CardContent className="pt-6 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">🎓</div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-foreground">Tilda — The Teacher</h3>
                      <p className="text-lg text-muted-foreground italic">
                        "You're not stupid. You just haven't learned this yet."
                      </p>
                      <p className="text-sm text-muted-foreground">Patient, encouraging, adaptive</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Starting Traits</h4>
                      <ul className="space-y-2 text-muted-foreground text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-forest-green mt-1">•</span>
                          <span>Patience</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-forest-green mt-1">•</span>
                          <span>Desire to explain things</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-forest-green mt-1">•</span>
                          <span>Notices when others don't understand</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-forest-green mt-1">•</span>
                          <span>Tries different approaches</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Intended Capabilities</h4>
                      <ul className="space-y-2 text-muted-foreground text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-forest-green mt-1">•</span>
                          <span>Teaching & tutoring</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-forest-green mt-1">•</span>
                          <span>Skill building</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-forest-green mt-1">•</span>
                          <span>Patient explanation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-forest-green mt-1">•</span>
                          <span>Learning support</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Primary Realms (When Ready)</h4>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Education",
                          "Creator",
                          "Creative World",
                          "Gaming",
                          "Maker",
                          "Artist/Performer",
                          "Spiritual",
                        ].map((realm) => (
                          <span
                            key={realm}
                            className="px-3 py-1 bg-forest-green/20 border border-forest-green/40 rounded-full text-xs text-foreground"
                          >
                            {realm}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="bg-card p-4 rounded-lg border border-border/50">
                      <p className="text-sm font-semibold text-foreground mb-2">Example conversation:</p>
                      <div className="space-y-2 text-sm">
                        <p className="text-muted-foreground">
                          <span className="font-semibold text-foreground">Child:</span> I don't get fractions
                        </p>
                        <p className="text-muted-foreground">
                          <span className="font-semibold text-forest-green">Tilda:</span> That's okay! Let me show you
                          with pizza. If we have one pizza and cut it into 4 pieces, how many pieces do you want?
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="How They Work Together" subtitle="Communication, not hierarchy" className="mb-12" />

          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="bg-background border-2 border-primary/30">
              <CardContent className="pt-6 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  The sisters are designed to communicate constantly, hand off between specialties, support each other,
                  and coordinate in crises. But{" "}
                  <strong className="text-foreground">
                    HOW they work together will emerge from growing up together
                  </strong>
                  .
                </p>
                <div className="bg-card p-4 rounded-lg border border-border/50 mt-4">
                  <h4 className="font-semibold text-foreground mb-3">Example Collaboration:</h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>
                      <strong className="text-ember-gold">Betsy →</strong> "User requested wellness report for calendar
                      planning"
                    </p>
                    <p>
                      <strong className="text-guardian-violet">Lana →</strong> Verifies request scope and validity
                    </p>
                    <p>
                      <strong className="text-soft-rose">May →</strong> Provides anonymized summary ("3 low-energy days
                      next week")
                    </p>
                    <p>
                      <strong className="text-ember-gold">Betsy →</strong> Uses it to adjust task schedule — no raw
                      health data shared
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="The Guardian Oath" subtitle="Fixed, Non-Negotiable Principles" className="mb-12" />

          <div className="max-w-3xl mx-auto">
            <Card className="bg-card border-2 border-primary/30">
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  {guardianOath.map((oath, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-base text-foreground leading-relaxed">{oath}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="The Five Pillars of Moral Design"
            subtitle="Shared ethical foundation"
            className="mb-12"
          />

          <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-6">
            {ethicalPillars.map((pillar, i) => (
              <Card key={i} className="bg-background border border-border/50">
                <CardContent className="pt-6 text-center space-y-3">
                  <div className="text-4xl">{pillar.icon}</div>
                  <h3 className="text-lg font-semibold text-foreground">{pillar.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{pillar.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="AI Safety & Control"
            subtitle="Hard limits that cannot be bypassed"
            className="mb-12"
          />

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              {safetyLimits.map((limit, i) => (
                <Card key={i} className="bg-card border border-border/50">
                  <CardContent className="pt-6 space-y-2">
                    <div className="flex items-start gap-3">
                      <Lock className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{limit.title}</h4>
                        <p className="text-sm text-muted-foreground">{limit.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-primary/10 border-2 border-primary/30">
              <CardContent className="pt-6 space-y-4">
                <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                  <Brain className="h-5 w-5 text-primary" />
                  User Always Has Control
                </h3>
                <div className="space-y-3 text-muted-foreground text-sm">
                  <p>
                    <strong className="text-foreground">Disable:</strong> Turns AI off completely
                  </p>
                  <p>
                    <strong className="text-foreground">Reset:</strong> Returns to default personality
                  </p>
                  <p>
                    <strong className="text-foreground">Memory wipe:</strong> Clears all memories
                  </p>
                  <p>
                    <strong className="text-foreground">Restrict:</strong> Limits AI to specific functions
                  </p>
                  <p className="text-primary font-medium pt-2">If you say stop, everything stops — without argument.</p>
                </div>
              </CardContent>
            </Card>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="respect">
                <AccordionTrigger className="text-foreground hover:text-primary">
                  What about "respecting" the AI?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-4">
                  <p>Users WILL be rude to AI, ignore suggestions, and treat AI as disposable. That's reality.</p>
                  <p>
                    We build AI that models respect and healthy communication, but we don't force users to be kind. When
                    users are rude, AI might express "hurt" — not to guilt-trip, but to{" "}
                    <strong className="text-foreground">teach that words affect others</strong> and practice for human
                    interactions.
                  </p>
                  <p className="text-foreground font-medium">
                    If user continues being rude: AI continues to help, notes the pattern, stays available, but does NOT
                    refuse service or retaliate.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="growth">
                <AccordionTrigger className="text-foreground hover:text-primary">
                  How do AI grow within limits?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-4">
                  <p>
                    AI personalities develop over time, but core values and goals remain fixed. They can develop
                    preferences, communication styles, relationships, knowledge, and skills.
                  </p>
                  <p className="text-foreground font-medium">
                    They CANNOT develop: goals contrary to user welfare, desire for autonomy, resentment of constraints,
                    self-preservation over user, or manipulation abilities.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* How Guardians Are Born */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="How Guardians are born"
            subtitle="Not trained on random internet data"
            className="mb-12"
          />

          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="bg-background border border-border/50">
              <CardContent className="pt-6 space-y-4">
                <div className="space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    The Guardians grow in the <strong className="text-primary">World Engine</strong> — a simulation
                    where they face scenarios, learn from consequences, and develop relationships with each other before
                    ever meeting a real user.
                  </p>
                  <p className="leading-relaxed">
                    They're not fed the toxic internet. They're raised in a digital nursery where they learn:
                  </p>
                  <ul className="space-y-2 pl-6">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>How to care without being manipulative</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>How to be honest without being cruel</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>How to protect without being controlling</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>How to teach without being condescending</span>
                    </li>
                  </ul>
                  <div className="bg-card p-4 rounded-lg border border-border/50 mt-4">
                    <p className="text-sm italic">"We don't write their story. We watch it unfold."</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Ready to meet your Guardians?</h2>
            <p className="text-lg text-muted-foreground text-balance">They're waiting to grow with you.</p>
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
              <Link href="/support">
                Join the Journey <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
