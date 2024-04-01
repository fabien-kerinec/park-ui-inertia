import inertia from '@adonisjs/inertia/client'
import adonisjs from '@adonisjs/vite/client'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    react(),
    inertia({ ssr: { enabled: true, entrypoint: 'resources/ssr.tsx' } }),
    adonisjs({
      entrypoints: ['resources/css/app.css', 'resources/app.tsx'],
      reload: ['resources/views/**/*.edge'],
    }),
  ],
})
