import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // এটি নিশ্চিত করবে যে সব ফাইল রুট পাথ থেকে লোড হচ্ছে
  base: '/', 
  plugins: [
    react(),
    tailwindcss(),
  ],
})