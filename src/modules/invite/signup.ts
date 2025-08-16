import { Brand, Data, Effect } from 'effect'

import { Password, PasswordService, PasswordServiceErrors, PasswordServiceTag } from './services/password'
import { Email, User, UserService, UserServiceErrors, UserServiceTag } from './services/user'

export interface SignupRequest {
  email: Brand.Brand.Unbranded<Email>
  password: Brand.Brand.Unbranded<Password>
}

export interface SignupResponse {
  email: Brand.Brand.Unbranded<Email>
}

type SignupErrors
 = | PasswordServiceErrors
   | SignupAlreadyExistsError
   | SignupValidationError
   | UserServiceErrors

type SignupRequirements = PasswordService | UserService

export class SignupAlreadyExistsError extends Data.TaggedClass('SignupAlreadyExistsError')<{
  readonly message: string
}> {}

export class SignupValidationError extends Data.TaggedClass('SignupValidationError')<{
  readonly message: string
}> {}

export function signup(request: SignupRequest): Effect.Effect<SignupResponse, SignupErrors, SignupRequirements> {
  return Effect.gen(function* () {
    const email = Email(request.email)
    const password = Password(request.password)

    const UserService = yield* UserServiceTag

    if (yield* UserService.exists(email)) {
      return yield* Effect.fail(new SignupAlreadyExistsError({
        message: `User with email ${email} already exists`,
      }))
    }

    const PasswordService = yield* PasswordServiceTag

    const hashedPassword = yield* PasswordService.hash(password)

    const user = User({ email, hashedPassword })

    yield* UserService.save(user)

    return yield* Effect.succeed({ email: Brand.unbranded(user.email) })
  })
}
