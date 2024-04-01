import { resolvePageComponent } from '@adonisjs/inertia/helpers'
import { createInertiaApp } from '@inertiajs/react'
import { hydrateRoot } from 'react-dom/client'
import '~/css/app.css'
import { Layout } from './components/layout/layout'

// import.meta.glob(['./assets/**'])

const appName = import.meta.env.VITE_APP_NAME || 'My app'

createInertiaApp({
  progress: { color: '#5468FF' },

  title: (title) => `${title} | ${appName}`,

  resolve: (name) => {
    return resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob('./pages/**/*.tsx'))
  },

  setup({ el, App, props }) {
    hydrateRoot(
      el,
      <Layout>
        <App {...props} />
      </Layout>
    )
  },
})
