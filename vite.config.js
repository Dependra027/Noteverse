import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Fixes incorrect asset paths
  build: {
    chunkSizeWarningLimit: 1000, // Increase chunk size limit to remove warning
  },
  server: {
    historyApiFallback: true, // Ensures Vercel serves index.html for React Router
  }
});
