import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  extractComments: false,
  server: {
    host: true
  },
  optimizeDeps: {
    include: ['react-icons/io5'],
  },
})
