import { Effect } from 'effect'

import { database, userPasswords, users } from '../../../database'
import { UserRepositoryTag } from './user-repository'

export const UserRepositoryDatabase = UserRepositoryTag.of({
  save: user => Effect.promise(() => database.transaction(async (t) => {
    await t.insert(users).values({
      email: user.email,
      id: user.id,
    })

    await t.insert(userPasswords).values({
      hash: user.hashedPassword,
      userId: user.id,
    })
  })),
})
