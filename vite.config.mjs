/* eslint-disable import/no-extraneous-dependencies */
import { babel } from '@rollup/plugin-babel';
import dns from 'dns';
import { resolve } from 'path';
import { defineConfig } from 'vite';

dns.setDefaultResultOrder('verbatim');

export default defineConfig({
  server: {
    port: 8080,
    open: true,
    allowedHosts: [
      'srm.focus.ind.in',
      'video.srmctele.com',
      'srmctele.com',
      'localhost',
      'localhost:8081',
      'srmccms.timesmed.com'
    ],
    hmr: {
      protocol: 'ws',
      host: 'localhost', // Or your local IP if testing from another device
      port: 5173,       // Default Vite port
    }
  },
  build: {
    minify: 'esbuild',
    target: 'es2019',
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'Livekit Client SDK JS',
      // the proper extensions will be added
      fileName: 'livekit-client',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [],
      output: {},
      plugins: [
        babel({
          babelHelpers: 'bundled',
          plugins: ['@babel/plugin-proposal-object-rest-spread'],
          presets: ['@babel/preset-env'],
          extensions: ['.js', '.ts', '.mjs'],
        }),
      ],
    },
  },
  test: {
    environment: 'happy-dom',
  },
});
