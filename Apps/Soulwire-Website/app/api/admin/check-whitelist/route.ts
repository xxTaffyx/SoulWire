import { createClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json({ whitelisted: false }, { status: 400 })
    }

    const emailLower = email.toLowerCase().trim()

    // Head admin is always whitelisted
    if (emailLower === "xxtaffyx@gmail.com") {
      return NextResponse.json({ whitelisted: true })
    }

    // Check database whitelist
    const supabase = await createClient()
    const { data, error } = await supabase.from("admin_users").select("email").eq("email", emailLower).single()

    if (error || !data) {
      return NextResponse.json({ whitelisted: false })
    }

    return NextResponse.json({ whitelisted: true })
  } catch (error) {
    return NextResponse.json({ whitelisted: false }, { status: 500 })
  }
}
