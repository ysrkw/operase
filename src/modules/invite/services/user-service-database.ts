import { count, eq } from 'drizzle-orm'
import { Effect } from 'effect'

import { database, users } from '../../../database'
import { UserServiceTag } from './user-service'

export const UserServiceDatabase = UserServiceTag.of({
  exists: email => Effect.promise(() =>
    database
      .select({ count: count() })
      .from(users)
      .where(eq(users.email, email)),
  ).pipe(
    Effect.map(result => result[0].count > 0),
  ),
})
