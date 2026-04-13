import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

// Get roadmap items from database
export async function GET() {
  try {
    const supabase = await createClient()

    const { data: items, error } = await supabase
      .from("roadmap_items")
      .select("*")
      .order("category", { ascending: true })
      .order("order_index", { ascending: true })

    if (error) throw error

    return NextResponse.json({ items: items || [] })
  } catch (error) {
    console.error("[v0] Error fetching roadmap:", error)
    return NextResponse.json({ error: "Failed to fetch roadmap" }, { status: 500 })
  }
}
