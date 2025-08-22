import { Effect, Layer, pipe } from 'effect'
import { expect, test } from 'vitest'

import { DrizzleService } from './drizzle-service'
import { DrizzleServiceMemory } from './drizzle-service-memory'
import { PasswordService } from './password-service'
import { PasswordServiceArgon2 } from './password-service-argon2'
import { signup } from './signup'
import { SignupUserRepository } from './signup-user-repository'
import { SignupUserRepositoryDrizzle } from './signup-user-repository-drizzle'

const DrizzleServiceLive = Layer.succeed(DrizzleService, DrizzleServiceMemory)
const PasswordServiceLive = Layer.succeed(PasswordService, PasswordServiceArgon2)
const SignupUserRepositoryLive = Layer.succeed(SignupUserRepository, SignupUserRepositoryDrizzle)

test('ユーザーが新規登録できる', async () => {
  const request = {
    email: 'test@example.com',
    password: 'PassW0rd!',
  }

  const program = pipe(
    signup(request),
    Effect.provide(DrizzleServiceLive),
    Effect.provide(PasswordServiceLive),
    Effect.provide(SignupUserRepositoryLive),
  )

  const result = await Effect.runPromiseExit(program)

  expect(result._tag).toBe('Success')
})
