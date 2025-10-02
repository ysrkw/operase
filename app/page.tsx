import type { Metadata } from 'next'

import { count, eq } from 'drizzle-orm'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { createDatabase } from '../lib/database'
import { sessions } from '../lib/database/schema'

export const metadata: Metadata = {
  title: 'ホーム',
}

export default async function Page() {
  const cookie = await cookies()
  const sid = cookie.get('sid')

  if (!sid) return redirect('/sign-in')

  const database = await createDatabase()

  const [existSession] = await database
    .select({ count: count() })
    .from(sessions)
    .where(eq(sessions.id, sid.value))

  if (existSession.count === 0) return redirect('/sign-in')

  return redirect('/dashboard')
}
