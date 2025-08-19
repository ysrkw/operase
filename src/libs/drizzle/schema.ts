import { sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const users = sqliteTable('users', {
  email: text('email').notNull().unique(),
  id: text('id').notNull().primaryKey(),
})

export const userPasswords = sqliteTable('user_passwords', {
  createdAt: text('created_at').notNull().default('now'),
  hash: text('hash').notNull().primaryKey(),
  userId: text('user_id').notNull().references(() => users.id),
})
