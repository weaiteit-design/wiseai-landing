import { createClient } from "@supabase/supabase-js";

// Supabase client using anon key with RLS policies.
// The waitlist table allows anonymous inserts via RLS policy.
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);
