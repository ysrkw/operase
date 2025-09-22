import { pgTable, timestamp, varchar } from 'drizzle-orm/pg-core'

export const group = pgTable('group', {
  id: varchar().notNull().primaryKey(),
  name: varchar().notNull(),
})

export const users = pgTable('users', {
  email: varchar().notNull().unique(),
  id: varchar().notNull().primaryKey(),
  name: varchar().notNull(),
})

export const memberships = pgTable('memberships', {
  groupId: varchar().notNull().references(() => group.id),
  userId: varchar().notNull().references(() => users.id),
})

export const passwords = pgTable('passwords', {
  createdAt: timestamp().notNull().defaultNow(),
  hash: varchar().notNull().primaryKey(),
  userId: varchar().notNull().references(() => users.id),
})

export const sessions = pgTable('sessions', {
  createdAt: timestamp().notNull().defaultNow(),
  id: varchar().notNull().primaryKey(),
  userId: varchar().notNull().references(() => users.id),
})
