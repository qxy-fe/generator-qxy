import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/**/*.ts', '!**/templates/*.ts'],
  ignoreWatch: ['src/**/templates/*'],
  outDir: 'generators',
  shims: true,
  clean: true,
  format: ['esm'],
  target: 'es2020',
  define:
    process.env.NODE_ENV === 'test'
      ? {}
      : {
          'process.env.NODE_ENV': `'undefined'`,
        },
  treeshake: 'safest',
  onSuccess: 'npm run copy',
  esbuildOptions: options => {
    options.charset = 'utf8'
  },
})
