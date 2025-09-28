import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  dbCredentials: {
    url: './dist',
  },
  dialect: 'postgresql',
  driver: 'pglite',
  out: './lib/database/migrations',
  schema: './lib/database/schema.ts',
})
