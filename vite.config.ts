import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  plugins: [
    react(),
    svgr({
      include: '**/*.svg?react',
      svgrOptions: {
        svgoConfig: {
          plugins: [
            {
              name: 'preset-default',
              params: {
                overrides: {
                  removeViewBox: false,
                  convertPathData: { floatPrecision: 2 },
                },
              },
            },
          ],
        },
      },
    }),
    viteStaticCopy({
      targets: [
        {
          src: 'src/assets/favicon/*',
          dest: 'assets/favicon',
        }
      ]
    })
  ],
});
