import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, FileText, Settings, Users, Globe } from "lucide-react"

export default async function AdminContentPage() {
  const cookieStore = await cookies()
  const isAuthenticated = cookieStore.get("admin_auth")?.value === "true"

  if (!isAuthenticated) {
    redirect("/admin/login")
  }

  const contentSections = [
    {
      title: "Homepage Content",
      description: "Edit hero text, taglines, and featured sections",
      icon: Globe,
      href: "/admin/content/homepage",
    },
    {
      title: "Product Pages",
      description: "Update SoulLang, Guardians, Realms, Devices, Soul, and SoulChild content",
      icon: FileText,
      href: "/admin/content/products",
    },
    {
      title: "About Pages",
      description: "Edit Vision, Trust, Privacy, and Support page content",
      icon: Users,
      href: "/admin/content/about",
    },
    {
      title: "Site Settings",
      description: "Update metadata, SEO, and global site settings",
      icon: Settings,
      href: "/admin/content/settings",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/40 bg-card/50 backdrop-blur">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button asChild variant="ghost" size="sm">
                <Link href="/admin/dashboard">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Dashboard
                </Link>
              </Button>
              <h1 className="text-2xl font-bold">Content Management</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Edit Website Content</h2>
            <p className="text-muted-foreground">
              Update copy, descriptions, and content across all pages of the SoulWire website
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {contentSections.map((section) => (
              <Card key={section.title} className="group hover:border-primary/30 transition-all cursor-pointer">
                <Link href={section.href}>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary">
                        <section.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors">
                          {section.title}
                        </CardTitle>
                        <CardDescription>{section.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Link>
              </Card>
            ))}
          </div>

          <Card className="mt-8 border-dashed">
            <CardContent className="pt-8 pb-8 text-center">
              <p className="text-sm text-muted-foreground">
                Content editors for individual sections are being built. For now, edit content directly in the codebase
                or contact the head admin.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
