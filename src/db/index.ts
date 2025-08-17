import { drizzle } from 'drizzle-orm/libsql'
import { sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const database = drizzle('file:dist/local.db')

export const users = sqliteTable('users', {
  id: text('id').primaryKey(),
})

export const userEmails = sqliteTable('user_emails', {
  email: text('email').notNull().unique(),
  userId: text('user_id').notNull().references(() => users.id),
})

export const userPasswords = sqliteTable('user_passwords', {
  hash: text('hash').notNull(),
  type: text('type').notNull().default('argon2'),
  userId: text('user_id').notNull().references(() => users.id),
})
