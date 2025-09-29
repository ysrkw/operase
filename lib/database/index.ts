import { PGlite } from '@electric-sql/pglite'
import { drizzle } from 'drizzle-orm/pglite'

import * as schema from './schema'

export async function createDatabase() {
  const client = await PGlite.create('./dist')

  return drizzle(client, { schema })
}
