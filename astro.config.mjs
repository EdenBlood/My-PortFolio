// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import preact from '@astrojs/preact'
import path from 'node:path'

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [preact()],
  resolve: {
    alias: {
      '@': path.resolve('./src')
    }
  },
  image: {
    service: {
      provider: 'https://images.pexels.com/'
    }
  }
})
