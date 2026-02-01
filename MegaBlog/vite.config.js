import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/',  // এটি রাখুন
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    outDir: 'dist',
    sourcemap: false,  // Production এ sourcemap বন্ধ রাখুন
  }
})