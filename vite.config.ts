import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import { env } from 'process'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(resolve(), 'index.html'),
        admin: resolve(resolve(), 'admin/index.html'),
      },
    },
  },
})
