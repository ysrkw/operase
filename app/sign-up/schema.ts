import { z } from 'zod'

import { Email, Name, Password } from '../../lib/definitions'

export const SignUpSchema = z.object({
  confirmPassword: Password,
  email: Email,
  name: Name,
  password: Password,
}).refine(v => v.password === v.confirmPassword, {
  message: 'パスワードが一致しません',
})
export type SignUpSchema = z.infer<typeof SignUpSchema>
