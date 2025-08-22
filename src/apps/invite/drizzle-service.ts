import { PgliteDatabase } from 'drizzle-orm/pglite'
import { Context, Effect } from 'effect'

export interface DrizzleService {
  getDatabase: () => Effect.Effect<PgliteDatabase, Error>
}

export const DrizzleService = Context.GenericTag<DrizzleService>('DrizzleService')
