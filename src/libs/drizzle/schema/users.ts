import { sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const users = sqliteTable('users', {
  email: text('email').notNull().unique(),
  id: text('id').notNull().primaryKey(),
})
