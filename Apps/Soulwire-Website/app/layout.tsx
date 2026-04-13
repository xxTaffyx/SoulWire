import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Sidebar } from "@/components/sidebar"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "SoulWire — Technology that protects your peace of mind",
  description: "A 30-year project to build a digital home for humanity. No ads. No tracking. No compromise.",
  keywords: ["privacy", "technology", "AI", "operating system", "digital ecosystem", "no tracking", "security"],
  authors: [{ name: "Taffy" }],
  openGraph: {
    title: "SoulWire — Technology that protects your peace of mind",
    description: "A 30-year project to build a digital home for humanity.",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.jpg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.jpg",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.jpg",
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1A1A2E",
  colorScheme: "dark light",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ScrollToTop />
        <Sidebar />
        <div className="ml-16">
          <main className="min-h-screen">{children}</main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  )
}
