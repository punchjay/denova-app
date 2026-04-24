import { defineConfig, transformWithEsbuild } from 'vite'
import react from '@vitejs/plugin-react'

// Transforms require(`prefix/${var}.ext`) → import.meta.glob lookup
// so dynamic image requires work in Vite without source changes.
function dynamicRequirePlugin() {
  const pattern = /require\(`([^`$]*)\$\{([^}]+)\}([^`]*)`\)/g
  return {
    name: 'dynamic-require',
    transform(code, id) {
      if (!id.endsWith('.jsx') && !id.endsWith('.js')) return null
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

// Allows .js files containing JSX (test files stay .js).
function jsxInJsPlugin() {
  return {
    name: 'jsx-in-js',
    async transform(code, id) {
      if (!id.match(/src\/.*\.js$/) || id.includes('node_modules')) return null
      return transformWithEsbuild(code, id, { loader: 'jsx', jsx: 'automatic' })
    },
  }
}

export default defineConfig({
  base: '/denova-app/',
  plugins: [
    jsxInJsPlugin(),
    react(),
    dynamicRequirePlugin(),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
  },
})
