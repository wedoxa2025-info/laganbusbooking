import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/lagan-new/', // Add this line - matches your repository name
  plugins: [react()],
})