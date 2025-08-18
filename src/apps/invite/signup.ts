import { Brand, Data, Effect } from 'effect'
import { ZodError } from 'zod'

import { createEmail, Email } from '../../models/email'
import { createId, Id } from '../../models/id'
import { createPassword, Password } from '../../models/password'
import { PasswordService } from './password-service'
import { SignupUser } from './signup-user'
import { SignupUserRepository } from './signup-user-repository'

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
  PasswordService | SignupUserRepository
> {
  return Effect.gen(function* () {
    const id = yield* createId()
    const email = yield* createEmail(request.email)
    const password = yield* createPassword(request.password)

    const signupUserRepository = yield* SignupUserRepository
    if (yield* signupUserRepository.exists(email)) {
      return yield* Effect.fail(new Error(`User with email ${email} already exists`))
    }

    const passwordService = yield* PasswordService
    const hashedPassword = yield* passwordService.hash(password)

    const user = SignupUser({
      email,
      hashedPassword,
      id,
    })

    yield* signupUserRepository.save(user)

    return SignupResponse({
      email: Brand.unbranded(user.email),
      id: Brand.unbranded(user.id),
    })
  })
}
