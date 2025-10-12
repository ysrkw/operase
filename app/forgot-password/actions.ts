'use server'

import { z } from 'zod'

import { PasswordResetSchema } from './schema'

interface PasswordResetState {
  emailErrors: string[]
}

export async function passwordReset(currentState: PasswordResetState, formData: FormData): Promise<PasswordResetState> {
  const result = await PasswordResetSchema.spa(
    Object.fromEntries(formData.entries()),
  )

  if (!result.success) {
    const errors = z.flattenError(result.error)

    return {
      emailErrors: errors.fieldErrors.email ?? [],
    }
  }

  return {
    emailErrors: [],
  }
}
