import { PGlite } from '@electric-sql/pglite'
import { drizzle } from 'drizzle-orm/pglite'
import { Effect, pipe } from 'effect'

import { DrizzleService } from './drizzle-service'

export const DrizzleServiceMemory = DrizzleService.of({
  getDatabase: () => pipe(
    new PGlite(),
    drizzle,
    Effect.succeed,
  ),
})
