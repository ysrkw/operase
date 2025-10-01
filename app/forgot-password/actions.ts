'use server'

import { PasswordResetSchema } from './schema'

export async function passwordReset(formData: FormData) {
  const result = await PasswordResetSchema.spa(
    Object.fromEntries(formData.entries()),
  )

  if (!result.success) {
    throw result.error
  }
}
