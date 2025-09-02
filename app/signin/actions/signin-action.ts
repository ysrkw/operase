import { z } from 'zod'

import { emailSchema, passwordSchema } from '../../lib/definitions'

export const SigninFormSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
})

export async function signinAction(formData: FormData) {
  'use server'

  const result = SigninFormSchema.safeParse(Object.fromEntries(formData.entries()))

  if (!result.success) {
    console.error(z.treeifyError(result.error))
  }
}
