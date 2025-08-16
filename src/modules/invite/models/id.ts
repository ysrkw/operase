import { Brand, Effect } from 'effect'
import { ulid } from 'ulid'
import { z, ZodError } from 'zod'

const schema = z.ulid()

export type Id = Brand.Brand<'OperatorId'> & z.infer<typeof schema>

const Id = Brand.nominal<Id>()

export function createId(value = ulid()): Effect.Effect<Id, ZodError> {
  const result = schema.safeParse(value)
  return result.success
    ? Effect.succeed(Id(result.data))
    : Effect.fail(result.error)
}
