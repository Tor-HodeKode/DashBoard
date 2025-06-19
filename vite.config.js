import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { base_url } from './config'

// https://vite.dev/config/
export default defineConfig({
  base: base_url, // Set the base URL for the application
  plugins: [react()],
})
