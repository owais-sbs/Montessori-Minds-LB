import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { formEmailApiPlugin } from './server/viteFormApiPlugin.js'

export default defineConfig({
  plugins: [react(), tailwindcss(), formEmailApiPlugin()],
})
