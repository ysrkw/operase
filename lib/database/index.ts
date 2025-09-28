import { PGlite } from '@electric-sql/pglite'
import { drizzle } from 'drizzle-orm/pglite'

import * as schema from './schema'

export async function createDatabase() {
  const client = await PGlite.create()

  return drizzle({
    client,
    logger: true,
    schema,
  })
}
