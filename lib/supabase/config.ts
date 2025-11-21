// Configuration for multiple Supabase projects
export type AppName = 'rise' | 'penpal'

interface SupabaseConfig {
  url: string
  anonKey: string
}

export const supabaseConfigs: Record<AppName, SupabaseConfig> = {
  rise: {
    url: process.env.NEXT_PUBLIC_RISE_SUPABASE_URL!,
    anonKey: process.env.NEXT_PUBLIC_RISE_SUPABASE_ANON_KEY!,
  },
  penpal: {
    url: process.env.NEXT_PUBLIC_PENPAL_SUPABASE_URL!,
    anonKey: process.env.NEXT_PUBLIC_PENPAL_SUPABASE_ANON_KEY!,
  },
}

export function getSupabaseConfig(app: AppName): SupabaseConfig {
  const config = supabaseConfigs[app]
  
  if (!config.url || !config.anonKey) {
    throw new Error(`Supabase configuration missing for app: ${app}`)
  }
  
  return config
}

