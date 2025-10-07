import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import preact from '@astrojs/preact'
import path from 'node:path'

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(process.cwd(), 'src')
      }
    }
  },
  integrations: [preact()],
  image: {
    service: {
      provider: 'https://images.pexels.com/'
    }
  }
})
