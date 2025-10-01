import { z } from 'zod'

import { Email } from '../../lib/definitions'

export const PasswordResetSchema = z.object({
  email: Email,
})
export type PasswordResetSchema = z.infer<typeof PasswordResetSchema>
