import { Brand, Effect } from 'effect'
import { z, ZodError } from 'zod'

const schema = z.string().min(8).max(64)

export type Password = Brand.Brand<'Password'> & z.infer<typeof schema>

const Password = Brand.nominal<Password>()

export function createPassword(value: z.infer<typeof schema>): Effect.Effect<Password, ZodError> {
  const result = schema.safeParse(value)
  return result.success
    ? Effect.succeed(Password(result.data))
    : Effect.fail(result.error)
}
