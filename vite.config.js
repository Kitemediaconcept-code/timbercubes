import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        services: resolve(__dirname, 'services.html'),
        wardrobes: resolve(__dirname, 'wardrobes.html'),
        gallery: resolve(__dirname, 'gallery.html')
      }
    }
  }
})
