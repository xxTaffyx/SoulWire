import { createBrowserClient } from "@supabase/ssr"

let client: ReturnType<typeof createBrowserClient> | null = null

export function createClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseKey) {
    console.error("[v0] Supabase env vars missing:", { supabaseUrl, supabaseKey })
    throw new Error("Supabase environment variables are not configured")
  }

  if (client) {
    return client
  }

  client = createBrowserClient(supabaseUrl, supabaseKey)

  return client
}
