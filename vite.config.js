import { defineConfig } from 'vite'
import svelte from '@sveltejs/vite-plugin-svelte'

export default defineConfig(({ command, mode }) => {
  const isProduction = mode === 'production'
  return {
    plugins: [
      svelte({
        /* inline options here */
      }),
    ],
    build: {
      minify: isProduction,
    },
  }
})
