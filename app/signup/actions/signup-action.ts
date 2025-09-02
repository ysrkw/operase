import { z } from 'zod'

import { confirmPasswordSchema, emailSchema, passwordSchema } from '../../lib/definitions'

export const SignupFormSchema = z.object({
  confirmPassword: confirmPasswordSchema,
  email: emailSchema,
  password: passwordSchema,
})

export async function signupAction(formData: FormData) {
  'use server'

  const result = SignupFormSchema.safeParse(Object.fromEntries(formData.entries()))

  if (!result.success) {
    console.error(z.treeifyError(result.error))
  }
}
