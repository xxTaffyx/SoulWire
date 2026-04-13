"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import {
  Home,
  Eye,
  Code2,
  Shield,
  Heart,
  Baby,
  Map,
  Cpu,
  Lock,
  UserCircle,
  CreditCard,
  BookOpen,
  Github,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false)
  const pathname = usePathname()

  const navGroups = [
    {
      title: "About",
      items: [
        { href: "/", label: "Home", icon: Home },
        { href: "/vision", label: "Vision", icon: Eye },
      ],
    },
    {
      title: "Products",
      items: [
        { href: "/soullang", label: "SoulLang", icon: Code2 },
        { href: "/guardians", label: "Guardians", icon: Shield },
        { href: "/soul", label: "Soul", icon: Heart },
        { href: "/soulchild", label: "SoulChild", icon: Baby },
        { href: "/realms", label: "Realms", icon: Map },
        { href: "/devices", label: "Devices", icon: Cpu },
      ],
    },
    {
      title: "Trust & Support",
      items: [
        { href: "/trust", label: "Trust", icon: Lock },
        { href: "/privacy", label: "Privacy", icon: UserCircle },
        { href: "/support", label: "Support", icon: CreditCard },
      ],
    },
    {
      title: "Community",
      items: [
        { href: "/journal", label: "Journal", icon: BookOpen },
        { href: "/community", label: "Community", icon: Sparkles },
        { href: "/roadmap", label: "Roadmap", icon: Map },
      ],
    },
  ]

  return (
    <>
      {/* Sidebar - Added hover handlers for auto-expand/collapse */}
      <aside
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
        className={cn(
          "fixed left-0 top-0 z-50 h-screen border-r border-border/40 bg-background/95 backdrop-blur transition-all duration-300",
          isExpanded ? "w-64" : "w-16",
        )}
      >
        <div className="flex h-full flex-col">
          {/* Logo & Toggle */}
          <div className="flex h-16 items-center justify-between border-b border-border/40 px-4">
            {isExpanded ? (
              <Link href="/" className="flex items-center space-x-2 group">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <span className="text-primary text-xl">🕯</span>
                </div>
                <span className="text-lg font-semibold text-foreground">SoulWire</span>
              </Link>
            ) : (
              <Link href="/" className="flex items-center justify-center w-full group">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <span className="text-primary text-xl">🕯</span>
                </div>
              </Link>
            )}
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-6 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent hover:scrollbar-thumb-primary/30">
            {navGroups.map((group) => (
              <div key={group.title}>
                {isExpanded && (
                  <h3 className="px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    {group.title}
                  </h3>
                )}
                <div className="space-y-1">
                  {group.items.map((item) => {
                    const Icon = item.icon
                    const isActive = pathname === item.href
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          "flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors",
                          isActive
                            ? "bg-primary/10 text-primary"
                            : "text-muted-foreground hover:text-primary hover:bg-accent",
                          !isExpanded && "justify-center",
                        )}
                        title={!isExpanded ? item.label : undefined}
                      >
                        <Icon className="h-5 w-5 flex-shrink-0" />
                        {isExpanded && <span>{item.label}</span>}
                      </Link>
                    )
                  })}
                </div>
              </div>
            ))}
          </nav>

          {/* Footer CTAs - Updated GitHub link to xxTaffyx/SoulWire */}
          <div className="border-t border-border/40 p-3 space-y-2">
            <a
              href="https://github.com/xxTaffyx/SoulWire"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "flex items-center gap-3 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-accent rounded-md transition-colors",
                !isExpanded && "justify-center",
              )}
              title={!isExpanded ? "GitHub" : undefined}
            >
              <Github className="h-5 w-5 flex-shrink-0" />
              {isExpanded && <span>GitHub</span>}
            </a>
            {isExpanded && (
              <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="#newsletter">Join the Journey</Link>
              </Button>
            )}
          </div>
        </div>
      </aside>
    </>
  )
}
