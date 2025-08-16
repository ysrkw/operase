import { Brand, Effect } from 'effect'
import z from 'zod'

const schema = z.email()

export type Email = Brand.Brand<'Email'> & z.infer<typeof schema>

const Email = Brand.nominal<Email>()

export function createEmail(value: z.infer<typeof schema>): Effect.Effect<Email, z.ZodError<z.infer<typeof schema>>> {
  const result = schema.safeParse(value)
  return result.success
    ? Effect.succeed(Email(result.data))
    : Effect.fail(result.error)
}
