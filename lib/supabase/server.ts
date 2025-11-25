import { createServerClient as createSupabaseServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import {
  DEFAULT_SUPABASE_PROJECT,
  getSupabaseConfig,
} from './config'

export async function createClient(
  project: string = DEFAULT_SUPABASE_PROJECT
) {
  const cookieStore = await cookies()
  const { url, anonKey } = getSupabaseConfig(project)

  return createSupabaseServerClient(url, anonKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll()
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options)
          )
        } catch {
          // The `setAll` method was called from a Server Component.
          // This can be ignored if you have middleware refreshing
          // user sessions.
        }
      },
    },
  })
}

