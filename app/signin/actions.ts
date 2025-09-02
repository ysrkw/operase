import { redirect } from 'next/navigation'
import { z } from 'zod'

import { emailSchema, passwordSchema } from '../lib/definitions'

export async function signinAction(formData: FormData) {
  'use server'

  const schema = z.object({
    email: emailSchema,
    password: passwordSchema,
  })

  const result = schema.safeParse(Object.fromEntries(formData.entries()))

  if (result.success) {
    console.log(result.data)
    return redirect('/dashboard')
  }

  console.error(z.treeifyError(result.error))
}
