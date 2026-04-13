"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "/vision", label: "Vision" },
    { href: "/soullang", label: "SoulLang" },
    { href: "/guardians", label: "Guardians" },
    { href: "/soul", label: "Soul" }, // Added Soul link after Guardians
    { href: "/soulchild", label: "SoulChild" }, // Added SoulChild link after Soul
    { href: "/realms", label: "Realms" },
    { href: "/devices", label: "Devices" },
    { href: "/trust", label: "Trust" },
    { href: "/privacy", label: "Privacy" },
    { href: "/support", label: "Support" },
    { href: "/journal", label: "Journal" },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <span className="text-primary font-bold text-xl">🕯</span>
            </div>
            <span className="text-xl font-semibold text-foreground">SoulWire</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors rounded-md hover:bg-accent"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <a
              href="https://github.com/xxTaffyx/SoulWire"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              GitHub
            </a>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="#newsletter">Join the Journey</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary hover:bg-accent rounded-md transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 space-y-2">
              <a
                href="https://github.com/xxTaffyx/SoulWire"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary hover:bg-accent rounded-md"
              >
                GitHub
              </a>
              <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="#newsletter" onClick={() => setIsOpen(false)}>
                  Join the Journey
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
