import { defineConfig } from 'drizzle-kit'
export default defineConfig({
  schema: "./utils/schema.tsx",
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://neondb_owner:8RYISPKqH0CN@ep-damp-credit-a5x0qysl.us-east-2.aws.neon.tech/MONK-AI?sslmode=require',
  },
  verbose: true,
  strict: true,
})