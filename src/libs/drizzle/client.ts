import { drizzle } from 'drizzle-orm/libsql'

export const database = drizzle(':memory:')
