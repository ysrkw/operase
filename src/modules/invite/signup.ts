import { Brand, Data, Effect } from 'effect'
import { ZodError } from 'zod'

import { createEmail, Email } from './models/email'
import { createId, Id } from './models/id'
import { createPassword, Password } from './models/password'
import { createUser } from './models/user'
import { PasswordService, PasswordServiceTag } from './services/password-service'
import { UserRepository, UserRepositoryTag } from './services/user-repository'
import { UserService, UserServiceTag } from './services/user-service'

export interface SignupRequest {
  email: Brand.Brand.Unbranded<Email>
  password: Brand.Brand.Unbranded<Password>
}

export const SignupRequest = Data.case<SignupRequest>()

export interface SignupResponse {
  email: Brand.Brand.Unbranded<Email>
  id: Brand.Brand.Unbranded<Id>
}

export const SignupResponse = Data.case<SignupResponse>()

export function signup(request: SignupRequest): Effect.Effect<
  SignupResponse,
  Error | ZodError,
  PasswordService | UserRepository | UserService
> {
  return Effect.gen(function* () {
    const id = yield* createId()
    const email = yield* createEmail(request.email)
    const password = yield* createPassword(request.password)

    const UserService = yield* UserServiceTag
    if (yield* UserService.exists(email)) {
      return yield* Effect.fail(new Error(`User with email ${email} already exists`))
    }

    const PasswordService = yield* PasswordServiceTag
    const hashedPassword = yield* PasswordService.hash(password)

    const user = yield* createUser({
      email,
      hashedPassword,
      id,
    })

    const UserRepository = yield* UserRepositoryTag
    yield* UserRepository.save(user)

    return yield* Effect.succeed(SignupResponse({
      email: Brand.unbranded(user.email),
      id: Brand.unbranded(user.id),
    }))
  })
}
