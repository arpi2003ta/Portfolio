import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000, // Adjust chunk size limit to suppress warnings
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Split large modules into separate chunks for better memory management
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        },
      },
    },
    minify: 'terser', // Use Terser for better minification
    target: 'esnext', // Use the latest JavaScript syntax for modern environments
  },
  server: {
    port: process.env.PORT || 5173, // Ensure compatibility with deployment platforms
    strictPort: true, // If the port is unavailable, it won't switch
    hmr: {
      protocol: 'ws', // Specify WebSocket protocol
      host: 'localhost', // Ensure HMR works locally and on deployment
    },
  },
});
