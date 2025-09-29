import { drizzle } from 'drizzle-orm/pglite'

import * as schema from './schema'

export function createDatabase() {
  return drizzle({
    connection: {
      dataDir: './dist',
    },
    schema,
  })
}
