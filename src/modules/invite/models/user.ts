import { Data, Effect } from 'effect'

import { Email } from './email'
import { HashedPassword } from './hashed-password'
import { Id } from './id'

export interface User {
  email: Email
  hashedPassword: HashedPassword
  id: Id
}

const User = Data.case<User>()

export function createUser(value: User): Effect.Effect<User> {
  return Effect.succeed(User(value))
}
