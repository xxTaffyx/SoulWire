import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Calendar, User, Clock } from "lucide-react"
import { NewsletterForm } from "@/components/newsletter-form"

// Sample data - in production, this would come from a CMS or database
const journalPosts = {
  "jan-2025-foundations": {
    title: "January 2025: Laying Foundations",
    date: "2025-01-15",
    author: "SoulWire Team",
    category: "Monthly Update",
    readTime: "8 min read",
    content: `
## Where We Are

Day 15 of 10,950. The cathedral is starting to take shape, though from the outside it still looks like a pile of stones and scaffolding.

This month we focused on the absolute essentials: getting SoulLang's compiler infrastructure solid, designing the core Guardian architecture, and setting up the development environment for early contributors.

## What We Built

### SoulLang Compiler (75% Complete)

The compiler can now parse and compile basic SoulLang programs. We've implemented:

- Privacy-by-default type system
- Memory safety guarantees
- Initial standard library with secure primitives
- Error messages that actually help (revolutionary, we know)

What's missing: Full optimization passes, advanced privacy annotations, and the debugging tools we desperately need ourselves.

### Guardian Framework (60% Complete)

We've built the foundational architecture for how Guardians work:

- Isolated execution environments
- Privacy-preserving communication protocols
- Resource management and sandboxing
- Basic personality and context system

Currently testing with Athena (our research assistant) and Sentinel (privacy monitor). They're... functional. Not brilliant yet, but functional.

### Infrastructure Setup

- Development environment automated
- CI/CD pipeline for safe deployments
- Documentation site (you're probably reading on it now)
- First 10 community contributors onboarded

## What's Hard Right Now

**The Privacy Paradox**: Making things private by default often makes them harder to use. We're constantly balancing security with usability. No easy answers yet.

**Speed vs. Quality**: Every day we feel the pressure to ship faster. But this is supposed to last 30 years. We're learning to be okay with slow.

**Explaining Why**: Most people don't realize how broken the current system is. Teaching why privacy matters is harder than building the technology.

## What We're Learning

1. **Documentation is infrastructure.** Good docs aren't optional - they're how we scale trust.

2. **Community before product.** The people building this matter more than the code. Culture compounds.

3. **Slow is smooth, smooth is fast.** Taking time to get foundations right prevents months of refactoring later.

## Next Month

February's focus: Getting Athena and Sentinel to alpha quality. We want internal team members using them daily, finding the rough edges, breaking things early.

Also: First external developer preview applications open. If you want early access, sign up on our community page.

## Finances

Transparent budget update:
- Runway: 18 months at current burn rate
- Team: 5 full-time, 3 part-time
- Infrastructure costs: $12K/month
- No VC funding (by design)

We're exploring sustainable revenue through early supporter subscriptions and enterprise pilots. More details next month.

## Thank You

To everyone who signed up, contributed code, or just sent encouragement - you're the reason this feels possible. Building something this ambitious can be lonely. Your belief keeps us going.

See you in February.

— The SoulWire Team

P.S. If you spot typos, there's a GitHub link at the bottom to suggest edits. This journal is open source, like everything else we build.
    `,
  },
  "dec-2024-beginnings": {
    title: "December 2024: The Beginning",
    date: "2024-12-20",
    author: "SoulWire Team",
    category: "Vision",
    readTime: "12 min read",
    content: `
## Why This Exists

Every major technology company will tell you they care about your privacy. Then they'll ask you to click "Accept All Cookies" to read their blog post about it.

We're tired of the doublespeak. Tired of products that feel like skinner boxes. Tired of beautiful interfaces hiding manipulative dark patterns. Tired of "move fast and break things" when what's breaking is society.

SoulWire is our answer. Not a perfect answer - we'll make plenty of mistakes - but an honest attempt to build something different.

## The Core Belief

**Privacy should be the default, not a premium feature.**

You shouldn't need a computer science degree to protect yourself online. You shouldn't have to choose between convenience and dignity. You shouldn't have to trust us blindly when we say "we respect your privacy."

## What Makes This Different

### 1. 30-Year Timeline

Most startups plan in quarters. We're planning in decades. This changes everything:

- No pressure to "exit"
- No pivot to surveillance capitalism when growth slows
- Time to get complex problems right
- Permission to say "not yet" instead of shipping broken

### 2. Privacy by Default

Everything in SoulWire is designed so the privacy-preserving choice is the easiest choice:

- End-to-end encryption isn't optional
- Zero-knowledge architecture means we *can't* spy even if we wanted to
- Open source everything so you can verify our claims
- No dark patterns, no manipulation, no tricks

### 3. No Selling Out

We're structured so we can't be acquired by big tech, can't pivot to ads, can't trade user data for growth. This is legally binding, not just a promise we'll break when the money's right.

## What We're Building

**SoulLang**: A programming language where privacy is the default. Make it harder to write insecure code than secure code.

**Guardians**: AI assistants you can actually trust. They work for you, know only what you tell them, and can't be subpoenaed or hacked.

**Realms**: Private digital spaces for everything from family photos to medical records. You control the keys, the access, everything.

**Devices**: Physical hardware you can touch. No cloud dependencies, no remote kill switches, no vendor lock-in.

## What We're NOT Building

- Another social network
- Another messaging app pretending to be private
- Another "privacy-focused" service that still tracks you
- Another startup planning to sell to Google in 3 years

## The First 90 Days

We're starting with SoulLang and Guardians. Getting the foundations right before we scale.

Month 1-3: Core language and compiler
Month 4-6: First Guardian prototypes
Month 7-9: Developer alpha program

Progress will be public. Code will be open. Updates will be honest.

## How You Can Help

**We need builders.** Engineers, designers, writers, thinkers. People who care more about doing it right than doing it fast.

**We need patience.** This is going to take time. There will be delays, setbacks, pivots. We'll tell you about all of them.

**We need honesty.** If we're screwing up, tell us. If something doesn't make sense, ask. If you spot a privacy hole, shout.

## What Keeps Us Up at Night

The honest truth? We're terrified.

Terrified we won't be good enough. Terrified we'll make a mistake that breaks trust. Terrified the world doesn't actually want what we're building.

But we're more terrified of living in the world we're headed toward if nobody tries.

## The Promise

We promise to:
- Build in public
- Admit mistakes quickly
- Never sell your data
- Never lie about what we're doing
- Never manipulate you for engagement
- Always give you a way out

That's it. That's the deal.

Welcome to SoulWire. Let's build something worth building.

— The SoulWire Team

P.S. Subscribe to this journal for monthly honest updates. No marketing BS, no growth hacking, just the real story of what it takes to build this.
    `,
  },
}

export function generateStaticParams() {
  return Object.keys(journalPosts).map((slug) => ({
    slug,
  }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = journalPosts[params.slug as keyof typeof journalPosts]
  return {
    title: `${post?.title} - SoulWire Journal` || "Journal - SoulWire",
    description: post?.title || "Transparent updates from the SoulWire team.",
  }
}

export default function JournalPostPage({ params }: { params: { slug: string } }) {
  const post = journalPosts[params.slug as keyof typeof journalPosts]

  if (!post) {
    return (
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-20 max-w-4xl text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Button asChild>
            <Link href="/journal">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Journal
            </Link>
          </Button>
        </div>
      </main>
    )
  }

  // Convert markdown-style content to React elements (simplified version)
  const renderContent = (content: string) => {
    return content.split("\n").map((line, index) => {
      if (line.startsWith("## ")) {
        return (
          <h2 key={index} className="text-3xl font-bold mt-12 mb-4 first:mt-0">
            {line.replace("## ", "")}
          </h2>
        )
      }
      if (line.startsWith("### ")) {
        return (
          <h3 key={index} className="text-2xl font-semibold mt-8 mb-3">
            {line.replace("### ", "")}
          </h3>
        )
      }
      if (line.startsWith("**") && line.endsWith("**")) {
        return (
          <p key={index} className="font-bold mt-4 mb-2">
            {line.replace(/\*\*/g, "")}
          </p>
        )
      }
      if (line.startsWith("- ")) {
        return (
          <li key={index} className="ml-6 mb-2 text-muted-foreground">
            {line.replace("- ", "")}
          </li>
        )
      }
      if (line.trim() === "") {
        return <div key={index} className="h-4" />
      }
      return (
        <p key={index} className="mb-4 text-muted-foreground leading-relaxed">
          {line}
        </p>
      )
    })
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-20 max-w-4xl">
        {/* Back Button */}
        <Button variant="ghost" className="mb-8" asChild>
          <Link href="/journal">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Journal
          </Link>
        </Button>

        {/* Article Header */}
        <article>
          <header className="mb-12">
            <Badge variant="secondary" className="mb-4 bg-teal/10 text-teal border-teal/20">
              {post.category}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">{post.title}</h1>

            <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <time dateTime={post.date}>{new Date(post.date).toLocaleDateString()}</time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none mb-16">{renderContent(post.content)}</div>

          {/* Article Footer */}
          <footer className="border-t border-border/50 pt-12">
            <Card className="bg-gradient-to-br from-teal/10 to-violet/10 border-teal/20 backdrop-blur">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
                <p className="text-muted-foreground mb-6">
                  Get our monthly journal entries delivered to your inbox. Honest updates, no marketing spam.
                </p>
                <NewsletterForm />
              </CardContent>
            </Card>
          </footer>
        </article>
      </div>
    </main>
  )
}
