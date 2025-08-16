import { Brand, Context, Data, Effect } from 'effect'

export type HashedPassword = Brand.Brand<'HashedPassword'> & string

export const HashedPassword = Brand.nominal<HashedPassword>()

export type Password = Brand.Brand<'Password'> & string

export const Password = Brand.refined<Password>(
  v => v.length >= 8 && v.length <= 64,
  v => Brand.error(`Invalid password: ${v}`),
)

export interface PasswordService {
  hash(password: Password): Effect.Effect<HashedPassword, PasswordHashError>
}

export const PasswordServiceTag = Context.GenericTag<PasswordService>('PasswordService')

export type PasswordServiceErrors = PasswordHashError

export class PasswordHashError extends Data.TaggedClass('PasswordHashError')<{
  readonly message: string
}> {}
