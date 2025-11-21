# Multi-Supabase Project Setup

This project supports multiple Supabase projects, one for each app (Rise and Penpal).

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Rise App Supabase Configuration
NEXT_PUBLIC_RISE_SUPABASE_URL=your-rise-project-url
NEXT_PUBLIC_RISE_SUPABASE_ANON_KEY=your-rise-anon-key

# Penpal App Supabase Configuration
NEXT_PUBLIC_PENPAL_SUPABASE_URL=your-penpal-project-url
NEXT_PUBLIC_PENPAL_SUPABASE_ANON_KEY=your-penpal-anon-key
```

## How It Works

### 1. Configuration (`lib/supabase/config.ts`)
- Defines the `AppName` type for all supported apps
- Maps each app to its Supabase credentials
- Provides a `getSupabaseConfig()` function to retrieve app-specific config

### 2. Client Creation
Both client and server Supabase clients now require an app name:

```typescript
// Client-side
import { createClient } from '@/lib/supabase/client'
const supabase = createClient('rise') // or 'penpal'

// Server-side
import { createClient } from '@/lib/supabase/server'
const supabase = await createClient('rise') // or 'penpal'
```

### 3. Auth Routes
Each app has its own auth confirmation route:
- Rise: `/app/rise/auth/confirm/route.ts`
- Penpal: `/app/penpal/auth/confirm/route.ts`

These routes use their respective Supabase projects for email verification.

## Email Redirect URLs

When setting up email templates in your Supabase projects, use these redirect URLs:

- **Rise**: `https://your-domain.com/rise/auth/confirm`
- **Penpal**: `https://your-domain.com/penpal/auth/confirm`

For local development:
- **Rise**: `http://localhost:3000/rise/auth/confirm`
- **Penpal**: `http://localhost:3000/penpal/auth/confirm`

## Adding a New App

1. Add the app name to the `AppName` type in `lib/supabase/config.ts`
2. Add the app's Supabase config to `supabaseConfigs` object
3. Add environment variables for the new app
4. Create auth routes under `/app/your-app/auth/confirm/`

