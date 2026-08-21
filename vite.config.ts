import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { validateContactValues } from './src/domain/siteContent.js'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  validateContactValues(env.VITE_CONTACT_PHONE, env.VITE_CONTACT_EMAIL)

  return {
    plugins: [react()],
  }
})
