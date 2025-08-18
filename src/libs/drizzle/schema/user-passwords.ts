import { sqliteTable, text } from 'drizzle-orm/sqlite-core'

import { users } from './users'

export const userPasswords = sqliteTable('user_passwords', {
  createdAt: text('created_at').notNull().default('now'),
  hash: text('hash').notNull(),
  userId: text('user_id').notNull().references(() => users.id),
})
