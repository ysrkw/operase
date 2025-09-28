import { pgTable, timestamp, varchar } from 'drizzle-orm/pg-core'

export const group = pgTable('group', {
  id: varchar('id').notNull().primaryKey(),
  name: varchar('name').notNull(),
})

export const users = pgTable('users', {
  email: varchar('email').notNull().unique(),
  id: varchar('id').notNull().primaryKey(),
  name: varchar('name').notNull(),
})

export const memberships = pgTable('memberships', {
  groupId: varchar('group_id').notNull().references(() => group.id),
  userId: varchar('user_id').notNull().references(() => users.id),
})

export const passwords = pgTable('passwords', {
  createdAt: timestamp('created_at').notNull().defaultNow(),
  hash: varchar('hash').notNull().primaryKey(),
  userId: varchar('user_id').notNull().references(() => users.id),
})

export const sessions = pgTable('sessions', {
  createdAt: timestamp('created_at').notNull().defaultNow(),
  id: varchar('id').notNull().primaryKey(),
  userId: varchar('user_id').notNull().references(() => users.id),
})
