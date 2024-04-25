import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import Sitemap from 'vite-plugin-sitemap';
import * as fs from 'fs';

function loadDynamicRoutes() {
  const routes = fs.readFileSync('dynamicRoutes.json', 'utf8');
  return JSON.parse(routes);
}

const dynamicRoutes = loadDynamicRoutes();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Sitemap({
      hostname: 'https://2coldok.github.io/blog/',
      dynamicRoutes
    })
  ],
  base: "/blog/",
  // cacheDir: './.vite',
})
