import { defineConfig } from 'tsup'

export default defineConfig({
  clean: true,
  entry: ['src/**/*.ts', '!**/templates/*.ts'],
  esbuildOptions: options => {
    options.charset = 'utf8'
  },
  format: ['esm'],
  ignoreWatch: ['src/**/templates/*'],
  onSuccess: 'npm run copy',
  outDir: 'generators',
  shims: true,
  target: 'es2022',
  treeshake: 'safest',
})
