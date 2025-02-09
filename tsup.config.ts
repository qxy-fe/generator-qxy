import { defineConfig } from 'tsup'

export default defineConfig({
  clean: true,
  entry: ['src/**/*.ts', '!**/templates/*.ts'],
  format: 'esm',
  ignoreWatch: ['src/**/templates/*'],
  onSuccess: 'npm run copy',
  outDir: 'generators',
  shims: true,
  target: ['es2022', 'node18'],
  treeshake: 'safest',
})
