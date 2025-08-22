import { count, eq } from 'drizzle-orm'
import { Effect } from 'effect'

import { userPasswords, users } from '../../libs/drizzle/schema'
import { DrizzleService } from './drizzle-service'
import { SignupUserRepository } from './signup-user-repository'

export const SignupUserRepositoryDrizzle = SignupUserRepository.of({
  exists: email => Effect.gen(function* () {
    const drizzleService = yield* DrizzleService
    const database = yield* drizzleService.getDatabase()

    const result = yield* Effect.promise(() =>
      database.select({ count: count() }).from(users).where(eq(users.email, email)),
    )

    return result[0].count > 0
  }),
  save: user => Effect.gen(function* () {
    const drizzleService = yield* DrizzleService
    const database = yield* drizzleService.getDatabase()

    yield* Effect.promise(() =>
      database.transaction(async (t) => {
        await t.insert(users).values({ email: user.email, id: user.id })
        await t.insert(userPasswords).values({ hash: user.hashedPassword, userId: user.id })
      }),
    )
  }),
})
