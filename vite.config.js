import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { config as loadDotenv } from 'dotenv'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { formEmailApiPlugin } from './server/viteFormApiPlugin.js'

const rootDir = path.dirname(fileURLToPath(import.meta.url))

// Ensure SMTP_* are on process.env for the local /api/send-form middleware.
loadDotenv({ path: path.join(rootDir, '.env.local'), override: false })
loadDotenv({ path: path.join(rootDir, '.env'), override: false })

export default defineConfig({
  envDir: rootDir,
  plugins: [react(), tailwindcss(), formEmailApiPlugin()],
})
