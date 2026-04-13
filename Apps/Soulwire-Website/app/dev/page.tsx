import Link from "next/link"
import { Github, Twitch, MessageCircle, Users, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export const metadata = {
  title: "About the Developer | SoulWire",
  description: "Meet Taffy, the creator behind SoulWire - building a digital home for humanity over 30 years.",
}

export default function DeveloperPage() {
  const socialLinks = [
    {
      name: "GitHub",
      username: "@xxTaffyx",
      url: "https://github.com/xxTaffyx",
      icon: Github,
      description: "Follow the code and contribute to SoulWire",
      color: "from-gray-600 to-gray-800",
    },
    {
      name: "Twitch",
      username: "@YourTwitchHandle",
      url: "https://twitch.tv/yourusername",
      icon: Twitch,
      description: "Watch live coding sessions and development streams",
      color: "from-purple-600 to-purple-800",
    },
    {
      name: "Kick",
      username: "@YourKickHandle",
      url: "https://kick.com/yourusername",
      icon: MessageCircle,
      description: "Alternative streaming platform for SoulWire updates",
      color: "from-green-600 to-green-800",
    },
    {
      name: "Discord",
      username: "SoulWire Community",
      url: "#",
      icon: Users,
      description: "Join the community and chat with other builders",
      color: "from-indigo-600 to-indigo-800",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/5" />
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 mb-6">
            <span className="text-5xl">👨‍💻</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6">
            Meet the <span className="text-primary">Developer</span>
          </h1>
          <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto leading-relaxed">
            Hi, I'm <span className="text-foreground font-semibold">Taffy</span> — the person behind SoulWire. I'm
            building a digital ecosystem that respects privacy and puts people first, one line of code at a time.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 text-center border-primary/20">
              <div className="text-3xl font-bold text-primary mb-2">30 Years</div>
              <div className="text-sm text-muted-foreground">Cathedral Building Journey</div>
            </Card>
            <Card className="p-6 text-center border-primary/20">
              <div className="text-3xl font-bold text-primary mb-2">5 Guardians</div>
              <div className="text-sm text-muted-foreground">AI Assistants in Development</div>
            </Card>
            <Card className="p-6 text-center border-primary/20">
              <div className="text-3xl font-bold text-primary mb-2">42 Realms</div>
              <div className="text-sm text-muted-foreground">Digital Spaces to Build</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Connect With Me</h2>
          <p className="text-muted-foreground text-center mb-12 text-balance">
            Follow the development journey, watch live coding streams, and join the community
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <Card key={social.name} className="group hover:border-primary/40 transition-all duration-300">
                  <Link href={social.url} target="_blank" rel="noopener noreferrer" className="block p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${social.color} text-white`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                      {social.name}
                    </h3>
                    <p className="text-sm text-primary mb-3">{social.username}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{social.description}</p>
                  </Link>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Card className="p-8 border-primary/20 bg-gradient-to-br from-card to-primary/5">
            <h2 className="text-2xl font-bold mb-4 text-center">Building Philosophy</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm not building SoulWire to sell it. I'm building it because the world needs technology that actually
                respects people. No ads, no tracking, no compromise.
              </p>
              <p>
                This is a <span className="text-foreground font-semibold">30-year cathedral project</span>. Most people
                will think I'm crazy for committing to something this long. But cathedrals weren't built in a year, and
                neither will this.
              </p>
              <p>
                Every day I wake up and write code. Day by day, brick by brick, we're building something that will
                outlive us all. That's the point.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Want to Help Build?</h2>
          <p className="text-muted-foreground mb-8 text-balance leading-relaxed">
            SoulWire is open for collaboration. Whether you're a developer, designer, or just someone who believes in
            privacy-first technology, there's a place for you here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="https://github.com/xxTaffyx/SoulWire" target="_blank">
                <Github className="mr-2 h-5 w-5" />
                View on GitHub
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/community">Join the Community</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
