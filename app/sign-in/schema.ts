import { z } from 'zod'

import { Email, Password } from '../../lib/definitions'

export const LoginSchema = z.object({
  email: Email,
  password: Password,
})
export type LoginSchema = z.infer<typeof LoginSchema>
