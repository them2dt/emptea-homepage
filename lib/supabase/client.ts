import { createBrowserClient as createSupabaseBrowserClient } from '@supabase/ssr'
import {
  DEFAULT_SUPABASE_PROJECT,
  getSupabaseConfig,
} from './config'

export function createClient(
  project: string = DEFAULT_SUPABASE_PROJECT
) {
  const { url, anonKey } = getSupabaseConfig(project)

  return createSupabaseBrowserClient(url, anonKey)
}

