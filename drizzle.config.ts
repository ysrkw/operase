import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  dialect: 'postgresql',
  driver: 'pglite',
  out: './lib/database/migrations',
  schema: './lib/database/schema.ts',
})
