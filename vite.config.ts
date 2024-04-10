import { getDirname } from '@adonisjs/core/helpers'
import inertia from '@adonisjs/inertia/client'
import adonisjs from '@adonisjs/vite/client'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    inertia({ ssr: { enabled: true, entrypoint: 'resources/ssr.tsx' } }),
    react(),
    adonisjs({ entrypoints: ['resources/app.tsx'], reload: ['resources/views/**/*.edge'] }),
  ],
  /**
   * Define aliases for importing modules from
   * your frontend code
   */
  resolve: {
    alias: {
      '~/': `${getDirname(import.meta.url)}/resources/`,
    },
  },
})
