'use server'

import { redirect } from 'next/navigation'
import { z } from 'zod'

import { Email, Name, Password } from '@/lib/definitions'

export async function signupAction(formData: FormData) {
  const schema = z.object({
    confirmPassword: Password,
    email: Email,
    name: Name,
    password: Password,
  }).refine(data => data.password === data.confirmPassword, {
    message: 'パスワードが一致しません',
  })

  const result = schema.safeParse(Object.fromEntries(formData.entries()))

  if (result.success) {
    console.log(result.data)
    return redirect('/dashboard')
  }

  console.error(z.treeifyError(result.error))
}
