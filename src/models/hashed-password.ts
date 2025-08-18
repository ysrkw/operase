import { Brand, Effect } from 'effect'
import { z, ZodError } from 'zod'

const schema = z.string()

export type HashedPassword = Brand.Brand<'HashedPassword'> & z.infer<typeof schema>

const HashedPassword = Brand.nominal<HashedPassword>()

export function createHashedPassword(value: z.infer<typeof schema>): Effect.Effect<HashedPassword, ZodError> {
  const result = schema.safeParse(value)
  return result.success
    ? Effect.succeed(HashedPassword(result.data))
    : Effect.fail(result.error)
}
