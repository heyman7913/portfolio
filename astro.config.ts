import image from '@astrojs/image';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import { defineConfig } from 'astro/config';
import { visualizer } from 'rollup-plugin-visualizer';
import path from 'path';
// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    image({
      cacheDir: path.resolve('./.astro/image-cache'),
    }),
    compress(),
  ],
  vite: {
    plugins: [visualizer()],
    resolve: {
      alias: {
        'date-fns/locale': 'date-fns/locale/index.js',
      },
    },
  },
});
