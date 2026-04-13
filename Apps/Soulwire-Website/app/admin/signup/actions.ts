"use server"

import { createClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function signUp(formData: FormData) {
  const email = formData.get("email") as string
  const password = formData.get("password") as string

  if (!email || !password) {
    return { error: "Email and password are required" }
  }

  const supabase = await createClient()

  // Create the user account
  const { data, error: signUpError } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${process.env.NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL || "http://localhost:3000"}/admin/dashboard`,
    },
  })

  if (signUpError) {
    return { error: signUpError.message }
  }

  if (!data.user) {
    return { error: "Failed to create account" }
  }

  // Check if user is authorized admin
  const { data: adminCheck } = await supabase
    .from("admin_users")
    .select("email")
    .eq("email", email.toLowerCase())
    .single()

  if (!adminCheck && email.toLowerCase() !== "xxtaffyx@gmail.com") {
    // Delete the user if not authorized
    await supabase.auth.admin.deleteUser(data.user.id)
    return { error: "Email not authorized for admin access" }
  }

  revalidatePath("/admin/login")
  redirect("/admin/login?message=Account created! Check your email to confirm.")
}
