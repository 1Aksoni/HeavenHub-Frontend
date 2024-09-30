import { defineConfig } from 'vite'
import React from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': "https://hevenhubbackend.onrender.com"
    },
  },
  plugins: [react()],
})
