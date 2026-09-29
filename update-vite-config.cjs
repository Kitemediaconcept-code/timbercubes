const fs = require('fs');

const code = `import { defineConfig } from 'vite'
import { resolve } from 'path'
import fs from 'fs'

// Dynamically grab all .html files in the root directory
const htmlFiles = fs.readdirSync(__dirname).filter(file => file.endsWith('.html'));
const input = {};
htmlFiles.forEach(file => {
  const name = file.replace('.html', '');
  input[name] = resolve(__dirname, file);
});

export default defineConfig({
  build: {
    rollupOptions: {
      input
    }
  }
})
`;

fs.writeFileSync('vite.config.js', code);
