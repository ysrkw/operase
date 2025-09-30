'use server'

import argon2 from 'argon2'
import { desc, eq } from 'drizzle-orm'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { ulid } from 'ulid'

import { createDatabase } from '@/lib/database'
import { passwords, sessions, users } from '@/lib/database/schema'

import { SignInSchema } from './schema'

export async function signIn(formData: FormData) {
  const result = SignInSchema.safeParse(Object.fromEntries(formData.entries()))

  if (!result.success) {
    throw result.error
  }

  const database = await createDatabase()

  const [existUser] = await database
    .select({ id: users.id })
    .from(users)
    .where(eq(users.email, result.data.email))
    .limit(1)

  if (!existUser) {
    throw new Error('ユーザーが存在しません')
  }

  const [lastPassword] = await database
    .select({ hash: passwords.hash })
    .from(passwords)
    .where(eq(passwords.userId, existUser.id))
    .orderBy(desc(passwords.createdAt))
    .limit(1)

  const isSamePassword = await argon2.verify(lastPassword.hash, result.data.password)

  if (!isSamePassword) {
    throw new Error('パスワードが違います')
  }

  const [newSession] = await database
    .insert(sessions)
    .values({
      createdAt: new Date(),
      id: ulid(),
      userId: existUser.id,
    })
    .returning()

  const cookie = await cookies()

  cookie.set({
    httpOnly: true,
    name: 'sid',
    path: '/',
    sameSite: 'strict',
    value: newSession.id,
  })

  return redirect('/dashboard')
}
