"use server"

import { createClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function signIn(formData: FormData) {
  const email = formData.get("email") as string
  const password = formData.get("password") as string

  if (!email || !password) {
    return { error: "Email and password are required" }
  }

  const supabase = await createClient()

  // Sign in the user
  const { error: signInError } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (signInError) {
    return { error: signInError.message }
  }

  // Check if user is authorized admin
  const { data: adminCheck } = await supabase
    .from("admin_users")
    .select("email")
    .eq("email", email.toLowerCase())
    .single()

  if (!adminCheck && email.toLowerCase() !== "xxtaffyx@gmail.com") {
    await supabase.auth.signOut()
    return { error: "Not authorized for admin access" }
  }

  revalidatePath("/admin/dashboard")
  redirect("/admin/dashboard")
}
