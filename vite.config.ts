import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import Sitemap from 'vite-plugin-sitemap';
import * as fs from 'fs';

function loadDynamicRoutes() {
  const routes = fs.readFileSync('dynamicRoutes.json', 'utf8');
  const parsedRoutes = JSON.parse(routes);

  // Sitemap이 hostname의 blog를 인식하지 못하고, dynamicRoutes를 상대경로로 올바르게 인식하지 못하기 때문에
  // sub domain인 blog를 추가해주는 과정.
  return parsedRoutes.map((route: string) => `blog/${route}`);
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
