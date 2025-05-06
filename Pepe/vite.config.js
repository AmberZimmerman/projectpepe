import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    cors: true,  // This enables CORS for all domains
  },
});
