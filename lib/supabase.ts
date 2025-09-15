// @/lib/supabase.ts
// IMPORTANT: Use createClientComponentClient for client-side components
// and createMiddlewareClient for middleware, and createServerComponentClient/createRouteHandlerClient for server.
// Do NOT use createClient from '@supabase/supabase-js' directly for client-side if you're using Next.js auth-helpers.
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
// You might want to import your database types if you have them generated
// import { Database } from './database.types'

if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
  throw new Error('Missing env.NEXT_PUBLIC_SUPABASE_URL')
}

if (!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  throw new Error('Missing env.NEXT_PUBLIC_SUPABASE_ANON_KEY')
}

// For client-side components that need access to Supabase.
// This client automatically manages Supabase session cookies.
export const supabase = createClientComponentClient(
  {
    supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
    supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  }
  // If you had database types, you'd specify them here:
  // {
  //   supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
  //   supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  // } as unknown as { supabaseUrl: string; supabaseKey: string; } & { database: Database; }
  // You don't pass the auth object directly here, auth-helpers handles it.
)

// The middleware already uses createMiddlewareClient correctly.
// Your auth.ts also needs to use the correct client setup.