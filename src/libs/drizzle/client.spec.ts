import { sql } from 'drizzle-orm'
import { expect, test } from 'vitest'

import { database } from './client'

test('接続テスト', async () => {
  const value = sql`SELECT 1 + 1 AS result`

  const result = await database.execute<{ result: number }>(value)

  expect(result.rows).toEqual([{ result: 2 }])
})
