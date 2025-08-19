import { count, eq } from 'drizzle-orm'
import { Effect, pipe } from 'effect'

import { database } from '../../libs/drizzle/client'
import { userPasswords, users } from '../../libs/drizzle/schema'
import { SignupUserRepository } from './signup-user-repository'

export const SignupUserRepositoryDrizzle = SignupUserRepository.of({
  exists: email => pipe(
    Effect.promise(() =>
      database
        .select({ count: count() })
        .from(users)
        .where(eq(users.email, email)),
    ),
    Effect.map(result => result[0].count > 0),
  ),
  save: user => pipe(
    Effect.promise(() =>
      database.transaction(async (t) => {
        await t.insert(users).values({
          email: user.email,
          id: user.id,
        })
        await t.insert(userPasswords).values({
          hash: user.hashedPassword,
          userId: user.id,
        })
      }),
    ),
  ),
})
