import { hash } from 'argon2'
import { Effect } from 'effect'

import { createHashedPassword } from '../models/hashed-password'
import { PasswordServiceTag } from './password-service'

export const PasswordServiceArgon2 = PasswordServiceTag.of({
  hash: password => Effect.gen(function* () {
    const hashedPassword = yield* Effect.tryPromise(() => hash(password))
    return yield* createHashedPassword(hashedPassword)
  }),
})
