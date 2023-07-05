import { loadEnv } from 'vite';
import path from 'path';
import framework7 from 'rollup-plugin-framework7';
import { chunkSplitPlugin } from 'vite-plugin-chunk-split';



const SRC_DIR = path.resolve(__dirname, './src');
const PUBLIC_DIR = path.resolve(__dirname, './public');
const BUILD_DIR = path.resolve(__dirname, './www',);

export default ({ mode }) => {
  Object.assign(process.env, loadEnv(mode, process.cwd()));

  return {
    plugins: [
      framework7({ emitCss: false }),
      chunkSplitPlugin({
        strategy: 'default',
      }),
    ],
    root: SRC_DIR,
    base: '/',
    publicDir: PUBLIC_DIR,
    build: {
      outDir: BUILD_DIR,
      assetsInlineLimit: 0,
      emptyOutDir: true,
      rollupOptions: {
        treeshake: false,
      },
    },
    resolve: {
      alias: {
        '@': SRC_DIR,
      },
    },
    server: {
      host: true,
    },
    esbuild: {
      jsxFactory: '$jsx',
      jsxFragment: '"Fragment"',
    },
  };
};
