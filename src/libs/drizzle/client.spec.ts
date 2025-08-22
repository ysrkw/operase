import { sql } from 'drizzle-orm'
import { expect, test } from 'vitest'

import { database } from './client'

test('接続テスト', async () => {
  const value = sql`SELECT 1 + 1 AS test`

  const result = await database.execute(value)

  expect(result.rows).toEqual([{ test: 2 }])
})
