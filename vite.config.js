import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Pages from'vite-plugin-pages'
// https://vite.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react(), Pages(),],
})
