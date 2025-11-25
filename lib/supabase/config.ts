const DEFAULT_SUPABASE_PROJECT = 'rise'

function toEnvPrefix(projectName: string) {
  return projectName.replace(/[^A-Za-z0-9]/g, '_').toUpperCase()
}

function normalizeProjectName(project?: string) {
  const raw = project?.trim()
  return raw && raw.length > 0 ? raw : DEFAULT_SUPABASE_PROJECT
}

export function getSupabaseConfig(project?: string) {
  const projectName = normalizeProjectName(project)
  const envPrefix = toEnvPrefix(projectName)
  const urlEnvName = `NEXT_PUBLIC_${envPrefix}_SUPABASE_URL`
  const anonEnvName = `NEXT_PUBLIC_${envPrefix}_SUPABASE_ANON_KEY`

  const url = process.env[urlEnvName]
  const anonKey = process.env[anonEnvName]

  if (!url || !anonKey) {
    throw new Error(
      `Missing Supabase env vars. Make sure both ${urlEnvName} and ${anonEnvName} are set for the ${projectName} project.`
    )
  }

  return { url, anonKey, projectName }
}

export { DEFAULT_SUPABASE_PROJECT }

