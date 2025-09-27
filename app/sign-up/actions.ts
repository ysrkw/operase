'use server'

import argon2 from 'argon2'
import { count, eq } from 'drizzle-orm'
import { redirect } from 'next/navigation'
import { ulid } from 'ulid'
import { z } from 'zod'

import { database } from '@/lib/database'
import { passwords, sessions, users } from '@/lib/database/schema'
import { Email, Name, Password } from '@/lib/definitions'

export async function signUp(formData: FormData) {
  const schema = z.object({
    confirmPassword: Password,
    email: Email,
    name: Name,
    password: Password,
  }).refine(v => v.password === v.confirmPassword, {
    message: 'パスワードが一致しません',
  })

  const result = schema.safeParse(Object.fromEntries(formData.entries()))

  if (!result.success) {
    throw result.error
  }

  const [existUser] = await database
    .select({ count: count() })
    .from(users)
    .where(eq(users.email, result.data.email))

  if (existUser.count > 0) {
    throw new Error('ユーザーが既に存在します')
  }

  const hash = await argon2.hash(result.data.password)
  const createdAt = new Date()

  const createdUser = await database.transaction(async (tx) => {
    const [newUser] = await tx
      .insert(users)
      .values({
        email: result.data.email,
        id: ulid(),
        name: result.data.name,
      })
      .returning()

    const [newPassword] = await tx
      .insert(passwords)
      .values({
        createdAt,
        hash,
        userId: newUser.id,
      })
      .returning()

    const [newSession] = await tx
      .insert(sessions)
      .values({
        createdAt,
        id: ulid(),
        userId: newUser.id,
      })
      .returning()

    return { newPassword, newSession, newUser }
  })

  console.log(createdUser)

  return redirect('/dashboard')
}
