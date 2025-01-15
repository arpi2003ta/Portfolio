import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1500, // Increased chunk size limit for flexibility
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Dynamically split large modules into separate chunks
          if (id.includes('node_modules')) {
            return id
              .toString()
              .split('node_modules/')[1]
              .split('/')[0]
              .toString();
          }
        },
      },
    },
    target: 'esnext', // Ensure compatibility with modern browsers
  },
  server: {
    port: process.env.PORT || 5173, // Use environment variable for port or default to 5173
    strictPort: true, // Enforce using the specified port
    hmr: {
      protocol: 'ws', // Use WebSocket for HMR
      host: 'localhost', // Ensure HMR works correctly locally and on deployment
    },
  },
});
