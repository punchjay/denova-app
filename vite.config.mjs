import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Transforms require(`prefix/${var}.ext`) → import.meta.glob lookup
// so dynamic image requires work in Vite without source changes.
function dynamicRequirePlugin() {
  const pattern = /require\(`([^`$]*)\$\{([^}]+)\}([^`]*)`\)/g
  return {
    name: 'dynamic-require',
    transform(code, id) {
      if (!id.match(/\.(jsx?|tsx?)$/)) return null
      if (!pattern.test(code)) return null
      pattern.lastIndex = 0
      const result = code.replace(pattern, (_, prefix, variable, suffix) => {
        const glob = `${prefix}*${suffix}`
        return `(() => { const m = import.meta.glob('${glob}', { eager: true, query: '?url', import: 'default' }); return m[\`${prefix}\${${variable}}${suffix}\`]; })()`
      })
      return result
    },
  }
}

export default defineConfig({
  base: '/denova-app/',
  server: {
    port: 5273,
    open: true,
  },
  preview: {
    port: 4273,
  },
  plugins: [
    react(),
    dynamicRequirePlugin(),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  },
})
