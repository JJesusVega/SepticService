import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { validateContactValues } from './src/domain/siteContent.js'

// GitHub Pages serves project sites from /<repo-name>/, so the base path
// must match the repository name when building for that target.
const GITHUB_PAGES_BASE = '/SepticService/'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  validateContactValues(env.VITE_CONTACT_PHONE, env.VITE_CONTACT_EMAIL)

  return {
    base: mode === 'ghpages' ? GITHUB_PAGES_BASE : '/',
    plugins: [react()],
  }
})
