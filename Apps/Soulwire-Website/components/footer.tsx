"use client"

import Link from "next/link"
import { Github } from "lucide-react"
import { useEffect, useState } from "react"

export function Footer() {
  const [dayCount, setDayCount] = useState(1)

  useEffect(() => {
    // Calculate days since project start (adjust this date to your actual start date)
    const startDate = new Date("2025-01-01")
    const today = new Date()
    const diffTime = Math.abs(today.getTime() - startDate.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    setDayCount(diffDays)
  }, [])

  const productLinks = [
    { href: "/vision", label: "Vision" },
    { href: "/soullang", label: "SoulLang" },
    { href: "/guardians", label: "Guardians" },
    { href: "/realms", label: "Realms" },
    { href: "/devices", label: "Devices" },
  ]

  const companyLinks = [
    { href: "/trust", label: "Trust & Privacy" },
    { href: "/support", label: "Support Us" },
    { href: "/roadmap", label: "Roadmap" },
    { href: "/journal", label: "Journal" },
    { href: "/dev", label: "Developer" },
  ]

  const communityLinks = [
    { href: "https://github.com/xxTaffyx/SoulWire", label: "GitHub", external: true },
    { href: "#", label: "Discord", external: true },
    { href: "/community", label: "Community" },
  ]

  const legalLinks = [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/admin/login", label: "Admin" },
  ]

  return (
    <footer className="border-t border-border/40 bg-card mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4 group">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <span className="text-primary font-bold text-xl">🕯</span>
              </div>
              <span className="text-xl font-semibold text-foreground">SoulWire</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4 max-w-xs">Technology that protects your peace of mind.</p>
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/xxTaffyx/SoulWire"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Product</h3>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Community</h3>
            <ul className="space-y-2">
              {communityLinks.map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/40 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 text-sm text-muted-foreground">
            <p className="text-primary font-medium">Day {dayCount} of 10,950</p>
            <p className="hidden md:block">•</p>
            <p>🕯 Built with care inside the Hollow Hearth</p>
          </div>
          <p className="text-sm text-muted-foreground">© 2025 Taffy — All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}
