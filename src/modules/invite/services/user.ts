import { Brand, Context, Data, Effect } from 'effect'

import { HashedPassword } from './password'

export type Email = Brand.Brand<'Email'> & string

export const Email = Brand.nominal<Email>()

export type User = Brand.Brand<'User'> & {
  email: Email
  hashedPassword: HashedPassword
}

export const User = Brand.nominal<User>()

export interface UserService {
  exists(email: Email): Effect.Effect<boolean, UserExistsError>
  save(user: User): Effect.Effect<void, UserSaveError>
}

export const UserServiceTag = Context.GenericTag<UserService>('UserService')

export type UserServiceErrors = UserExistsError | UserSaveError

export class UserExistsError extends Data.TaggedClass('UserExistsError')<{
  readonly message: string
}> {}

export class UserSaveError extends Data.TaggedClass('UserSaveError')<{
  readonly message: string
}> {}
