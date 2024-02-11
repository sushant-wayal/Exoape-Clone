import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://sushant-wayal.github.io/Exoape-Clone/',
  plugins: [react()],
})
