import { defineConfig, splitVendorChunkPlugin } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: true,
    // Force another chunk to be generated. Otherwise, we need the `splitVendorChunkPlugin` to reproduce the issue
    rollupOptions: {
      output: {
        manualChunks: {
          utils: ['./src/utils']
        }
      }
    }
  },
  plugins: [react()],
})
