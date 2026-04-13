import { SectionHeading } from "@/components/section-heading"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { Shield, Lock, Eye, Users, FileText, AlertCircle } from "lucide-react"

export const metadata = {
  title: "Privacy & Age Protection | SoulWire",
  description:
    "Your data isn't our product — it's your story. Learn about SoulWire's privacy-first approach and age-appropriate realm access.",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Privacy & Age Protection
            </h1>
            <p className="text-xl text-muted-foreground text-balance">
              "Your data isn't our product — it's your story."
            </p>
            <div className="flex items-center justify-center gap-6 mt-8 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">🕯 Hollow Hearth warmth</span>
              <span className="flex items-center gap-2">🌌 SoulWire Teal clarity</span>
              <span className="flex items-center gap-2">🔮 Dream-Circuit trust</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">Last updated: November 11, 2025</p>
          </div>
        </div>
      </section>

      {/* Purpose */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <Card className="p-8 bg-card/50 backdrop-blur border-border/50">
            <h2 className="text-2xl font-bold text-foreground mb-4">Purpose</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              This policy explains what information SoulWire collects, how it's stored, and how you stay in control of
              it. Privacy isn't a checkbox here — it's a core design rule. SoulWire was built so technology works for
              you, not around you.
            </p>
          </Card>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <SectionHeading
            title="The SoulWire Philosophy"
            subtitle="Five principles that guide every decision we make"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[
              {
                icon: Lock,
                title: "Local-first",
                description: "Your data belongs on your device first.",
              },
              {
                icon: Eye,
                title: "Explicit consent",
                description: "Nothing leaves your vault unless you say so.",
              },
              {
                icon: AlertCircle,
                title: "No third-party ads",
                description: "None, ever.",
              },
              {
                icon: FileText,
                title: "Readable language",
                description: "You deserve clarity, not legal fog.",
              },
              {
                icon: Users,
                title: "Right to forget",
                description: "You can erase or export everything — permanently.",
              },
            ].map((principle, index) => (
              <Card
                key={index}
                className="p-6 bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all"
              >
                <principle.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">{principle.title}</h3>
                <p className="text-muted-foreground">{principle.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Store */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SectionHeading title="What We Store" subtitle="Complete transparency about data collection" />
          <div className="space-y-6 mt-12">
            <Card className="p-8 bg-card/50 backdrop-blur border-border/50">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">📂 On Your Device</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Realm data (notes, chats, media, ledgers) — encrypted locally</li>
                <li>• AI memory, preferences, and private notes — visible only to you</li>
                <li>• Security logs and permission records</li>
              </ul>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur border-border/50">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                ☁️ In the Cloud (optional & encrypted)
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Encrypted backups of your vaults, only if you enable Cloud Sync</li>
                <li>• Anonymous diagnostics (error codes, not content) if you opt-in</li>
                <li>• Purchase receipts for Shop transactions with no personal identifiers</li>
              </ul>
            </Card>

            <Card className="p-8 bg-destructive/10 border-destructive/20">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">🚫 Never Collected</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Raw ID scans or government documents</li>
                <li>• Camera, microphone, or GPS data without live consent</li>
                <li>• Advertising identifiers or tracking pixels</li>
                <li>• Behavioral profiling or data sales</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Guardian AIs */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SectionHeading
            title="The Guardian AIs"
            subtitle="Each AI works as a local assistant — never a data harvester"
          />
          <div className="mt-12 space-y-4">
            {[
              {
                name: "Bitsy",
                role: "Helper & orchestrator",
                access: "Reads only Realm metadata you're using",
                cloud: "None by default",
              },
              {
                name: "Clara",
                role: "Facts & verification",
                access: "Reads public sources only",
                cloud: "Optional fact-check cloud",
              },
              {
                name: "Lana",
                role: "Security guardian",
                access: "Monitors permissions and anomalies",
                cloud: "Never",
              },
              {
                name: "Tilda",
                role: "Tutor & education",
                access: "Reads learning data you approve",
                cloud: "Optional curriculum sync",
              },
              {
                name: "May",
                role: "Health & wellbeing",
                access: "Reads health vault data you approve",
                cloud: "Optional doctor sync",
              },
            ].map((ai) => (
              <Card key={ai.name} className="p-6 bg-card/50 backdrop-blur border-border/50">
                <div className="grid md:grid-cols-4 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">AI</p>
                    <p className="font-semibold text-foreground">{ai.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Role</p>
                    <p className="text-sm text-foreground">{ai.role}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Data Access</p>
                    <p className="text-sm text-foreground">{ai.access}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Cloud Use</p>
                    <p className="text-sm text-foreground">{ai.cloud}</p>
                  </div>
                </div>
              </Card>
            ))}
            <p className="text-center text-muted-foreground italic mt-6">
              No AI shares your private conversations unless you explicitly export them.
            </p>
          </div>
        </div>
      </section>

      {/* Your Rights */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SectionHeading title="Transparency & Control" subtitle="You own your data. Period." />
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <Card className="p-8 bg-card/50 backdrop-blur border-border/50">
              <h3 className="text-xl font-bold text-foreground mb-4">🧰 You Can</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• View, edit, or delete all data you store</li>
                <li>• Export Realms or AI memory as JSON, PDF, or CSV</li>
                <li>• Revoke any permission instantly</li>
                <li>• Disable network access per Realm</li>
                <li>• Review every connection in Locksie's Network Log</li>
              </ul>
            </Card>
            <Card className="p-8 bg-destructive/10 border-destructive/20">
              <h3 className="text-xl font-bold text-foreground mb-4">🚫 You Can't</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Be tracked or profiled in secret</li>
                <li>• Be denied deletion or export rights</li>
                <li>• Have encrypted data opened by anyone but you — not even SoulWire</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Age Protection */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <SectionHeading title="Realm Access By Age" subtitle="Every Realm. Every age. Appropriate for each." />
          <div className="mt-12">
            <Card className="p-8 bg-card/50 backdrop-blur border-border/50 mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">How Realms Work With Age</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every Realm has age-appropriate versions. A 5-year-old and a 35-year-old both access the Education
                Realm, but they see completely different content.
              </p>
            </Card>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="education" className="border rounded-lg px-6 bg-card/50 backdrop-blur">
                <AccordionTrigger className="hover:no-underline">
                  <span className="text-lg font-semibold">📚 Education Realm</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="space-y-3 mt-4">
                    {[
                      { age: "0-2", access: "Parent guidance, developmental tracking" },
                      { age: "2-4", access: "Preschool learning — ABCs, counting, colors" },
                      { age: "4-7", access: "Elementary — Reading, math, basic subjects" },
                      { age: "7-12", access: "Full elementary/middle — All subjects" },
                      { age: "13-17", access: "Teen — Advanced subjects, test prep" },
                      { age: "18+", access: "Adult — Continued learning, professional" },
                    ].map((item) => (
                      <div key={item.age} className="flex gap-4 pb-3 border-b border-border/50 last:border-0">
                        <span className="font-semibold text-primary min-w-[80px]">{item.age}</span>
                        <span className="text-muted-foreground">{item.access}</span>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="medical" className="border rounded-lg px-6 bg-card/50 backdrop-blur">
                <AccordionTrigger className="hover:no-underline">
                  <span className="text-lg font-semibold">🏥 Medical Realm</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="space-y-3 mt-4">
                    {[
                      { age: "0-5", access: "Parent-only — Tracking, records, appointments" },
                      { age: "5-10", access: "Shared — Child sees age-appropriate health info" },
                      { age: "10-13", access: "Pre-teen — Puberty information, body education" },
                      { age: "13-17", access: "Teen — More independence, sexual health (age-appropriate)" },
                      { age: "18+", access: "Full — Complete medical autonomy" },
                    ].map((item) => (
                      <div key={item.age} className="flex gap-4 pb-3 border-b border-border/50 last:border-0">
                        <span className="font-semibold text-primary min-w-[80px]">{item.age}</span>
                        <span className="text-muted-foreground">{item.access}</span>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="gaming" className="border rounded-lg px-6 bg-card/50 backdrop-blur">
                <AccordionTrigger className="hover:no-underline">
                  <span className="text-lg font-semibold">🎮 Gaming Realm</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="space-y-3 mt-4">
                    {[
                      { age: "0-3", access: "None (not appropriate)" },
                      { age: "3-7", access: "Educational games only" },
                      { age: "7-10", access: "Kids games — E-rated, curated" },
                      { age: "10-13", access: "Kids+ games — E10+, parent approval for more" },
                      { age: "13-17", access: "Teen games — T-rated, some M with parent approval" },
                      { age: "18+", access: "Full — All ratings" },
                    ].map((item) => (
                      <div key={item.age} className="flex gap-4 pb-3 border-b border-border/50 last:border-0">
                        <span className="font-semibold text-primary min-w-[80px]">{item.age}</span>
                        <span className="text-muted-foreground">{item.access}</span>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="social" className="border rounded-lg px-6 bg-card/50 backdrop-blur">
                <AccordionTrigger className="hover:no-underline">
                  <span className="text-lg font-semibold">👥 Social Realm</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="space-y-3 mt-4">
                    {[
                      { age: "0-7", access: "None (family only)" },
                      { age: "7-10", access: "Family + parent-approved friends only" },
                      { age: "10-13", access: "Age-bracketed (10-13) + family" },
                      { age: "13-17", access: "Age-bracketed (see dating rules) + family" },
                      { age: "18+", access: "Adults only (family exception for minors)" },
                    ].map((item) => (
                      <div key={item.age} className="flex gap-4 pb-3 border-b border-border/50 last:border-0">
                        <span className="font-semibold text-primary min-w-[80px]">{item.age}</span>
                        <span className="text-muted-foreground">{item.access}</span>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="finance" className="border rounded-lg px-6 bg-card/50 backdrop-blur">
                <AccordionTrigger className="hover:no-underline">
                  <span className="text-lg font-semibold">💰 SoulBank Realm</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="space-y-3 mt-4">
                    {[
                      { age: "0-7", access: "Parent tracking expenses" },
                      { age: "7-10", access: "Allowance visibility" },
                      { age: "10-13", access: "Allowance management, saving" },
                      { age: "13-17", access: "Teen account, earning, budgeting" },
                      { age: "18+", access: "Full banking features" },
                    ].map((item) => (
                      <div key={item.age} className="flex gap-4 pb-3 border-b border-border/50 last:border-0">
                        <span className="font-semibold text-primary min-w-[80px]">{item.age}</span>
                        <span className="text-muted-foreground">{item.access}</span>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="entertainment" className="border rounded-lg px-6 bg-card/50 backdrop-blur">
                <AccordionTrigger className="hover:no-underline">
                  <span className="text-lg font-semibold">🎬 Entertainment Realm</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="space-y-3 mt-4">
                    {[
                      { age: "0-2", access: "Baby content — Developmental only" },
                      { age: "2-5", access: "Preschool content — Educational shows" },
                      { age: "5-8", access: "Kids content — G-rated" },
                      { age: "8-13", access: "Kids+ content — PG, some PG-13 with approval" },
                      { age: "13-17", access: "Teen content — PG-13, some R with parent approval" },
                      { age: "18+", access: "Full content — All ratings" },
                    ].map((item) => (
                      <div key={item.age} className="flex gap-4 pb-3 border-b border-border/50 last:border-0">
                        <span className="font-semibold text-primary min-w-[80px]">{item.age}</span>
                        <span className="text-muted-foreground">{item.access}</span>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="career" className="border rounded-lg px-6 bg-card/50 backdrop-blur">
                <AccordionTrigger className="hover:no-underline">
                  <span className="text-lg font-semibold">💼 Career Realm</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="space-y-3 mt-4">
                    {[
                      { age: "0-10", access: "None" },
                      { age: "10-13", access: '"When I grow up" exploration' },
                      { age: "13-15", access: "Career exploration, interests" },
                      { age: "15-17", access: "Job search (teen jobs), preparation" },
                      { age: "18+", access: "Full career features" },
                    ].map((item) => (
                      <div key={item.age} className="flex gap-4 pb-3 border-b border-border/50 last:border-0">
                        <span className="font-semibold text-primary min-w-[80px]">{item.age}</span>
                        <span className="text-muted-foreground">{item.access}</span>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="nsfw"
                className="border rounded-lg px-6 bg-card/50 backdrop-blur border-destructive/20"
              >
                <AccordionTrigger className="hover:no-underline">
                  <span className="text-lg font-semibold">🔞 NSFW-Adjacent Realms</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="space-y-3 mt-4">
                    {[
                      { realm: "Relationship (intimate features)", under18: "❌", over18: "Opt-in" },
                      { realm: "SoulBody (adult features)", under18: "❌", over18: "Opt-in" },
                      { realm: "Long-distance presence (intimate)", under18: "❌", over18: "Opt-in" },
                    ].map((item) => (
                      <div key={item.realm} className="flex gap-4 pb-3 border-b border-border/50 last:border-0">
                        <span className="text-muted-foreground flex-1">{item.realm}</span>
                        <span className="font-semibold text-destructive min-w-[80px]">Under 18: {item.under18}</span>
                        <span className="font-semibold text-primary min-w-[80px]">18+: {item.over18}</span>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Encryption */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SectionHeading title="Encryption & Storage" subtitle="Military-grade security for your peace of mind" />
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {[
              { label: "Local", value: "AES-256-GCM with unique salts per Realm" },
              { label: "Cloud", value: "Client-side encryption before upload" },
              { label: "Transport", value: "TLS 1.3 with Perfect Forward Secrecy" },
              { label: "Key Storage", value: "OS Secure Enclave / Keychain" },
              { label: "Audit", value: "Each change produces a verifiable hash chain" },
            ].map((item) => (
              <Card key={item.label} className="p-6 bg-card/50 backdrop-blur border-border/50">
                <p className="text-sm text-muted-foreground mb-2">{item.label}</p>
                <p className="text-foreground font-medium">{item.value}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Promise */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-card/50 backdrop-blur border-border/50">
              <h3 className="text-xl font-bold text-foreground mb-4">Contact</h3>
              <p className="text-muted-foreground mb-4">For privacy or data concerns:</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-foreground">
                  <span>📧</span>
                  <a href="mailto:xxtaffyx@gmail.com" className="hover:text-primary transition-colors">
                    xxtaffyx@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <span>💬</span>
                  <span>Discord: SoulWire Support Server</span>
                </li>
              </ul>
              <p className="text-sm text-muted-foreground mt-4 italic">
                These are the only official support channels for privacy and data issues.
              </p>
            </Card>

            <Card className="p-8 bg-primary/10 border-primary/20">
              <h3 className="text-xl font-bold text-foreground mb-4">🕊️ Final Promise</h3>
              <p className="text-foreground font-semibold mb-4">"We can't promise perfection — only honesty."</p>
              <p className="text-muted-foreground leading-relaxed">
                SoulWire exists to give people a home online that feels safe, clear, and human. Every design decision
                begins with one question: Does this protect someone's peace of mind? If not, it doesn't make the cut.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
