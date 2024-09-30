import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://hevenhubbackend.onrender.com',
        changeOrigin: true,  // Needed for virtual hosted sites
        secure: false, // If you're using HTTP
      },
    },
  },
  plugins: [react()],
});
