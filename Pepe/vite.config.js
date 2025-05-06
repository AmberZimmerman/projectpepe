// vite.config.js

import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    cors: {
      origin: 'http://localhost:5173', // Configure the allowed origin (replace with your actual backend URL if needed)
    },
  },
  build: {
    manifest: true, // Generate the manifest.json file
    rollupOptions: {
      input: '/path/to/main.js', // Set the entry file for your project
    },
  },
})
