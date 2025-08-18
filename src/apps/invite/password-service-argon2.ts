import { hash } from 'argon2'
import { Effect, pipe } from 'effect'

import { createHashedPassword } from '../../models/hashed-password'
import { PasswordService } from './password-service'

export const PasswordServiceArgon2 = PasswordService.of({
  hash: password => pipe(
    Effect.promise(() => hash(password)),
    Effect.andThen(createHashedPassword),
  ),
})
