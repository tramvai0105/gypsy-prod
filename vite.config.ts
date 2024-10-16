import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  server: {
    host: '127.0.0.1',  // Add this to force IPv4 only
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(resolve(), 'index.html'),
        admin: resolve(resolve(), 'admin/index.html'),
      },
    },
  },
})
