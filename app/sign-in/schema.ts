import { z } from 'zod'

import { Email, Password } from '../../lib/definitions'

export const SignInSchema = z.object({
  email: Email,
  password: Password,
})
export type SignInSchema = z.infer<typeof SignInSchema>
