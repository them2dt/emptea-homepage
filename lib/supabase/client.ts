import { createBrowserClient } from '@supabase/ssr'
import { type AppName, getSupabaseConfig } from './config'

export function createClient(app: AppName) {
  const config = getSupabaseConfig(app)
  
  return createBrowserClient(
    config.url,
    config.anonKey
  )
}

