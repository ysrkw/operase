import { pgTable, varchar } from 'drizzle-orm/pg-core'

export const users = pgTable('users', {
  email: varchar().notNull().unique(),
  id: varchar().notNull().primaryKey(),
  name: varchar().notNull(),
})

export const userPasswords = pgTable('user_passwords', {
  createdAt: varchar().notNull().default('now'),
  hash: varchar().notNull().primaryKey(),
  userId: varchar().notNull().references(() => users.id),
})

export const userSessions = pgTable('user_sessions', {
  createdAt: varchar().notNull().default('now'),
  id: varchar().notNull().primaryKey(),
  userId: varchar().notNull().references(() => users.id),
})
