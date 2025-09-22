'use server'

import argon2 from 'argon2'
import { desc, eq } from 'drizzle-orm'
import { redirect } from 'next/navigation'
import { z } from 'zod'

import { database } from '@/lib/database'
import { passwords, users } from '@/lib/database/schema'
import { Email, Password } from '@/lib/definitions'

export async function signinAction(formData: FormData) {
  const schema = z.object({
    email: Email,
    password: Password,
  })

  const result = schema.safeParse(Object.fromEntries(formData.entries()))

  if (!result.success) {
    throw result.error
  }

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

  console.log(existUser, lastPassword)

  return redirect('/dashboard')
}
