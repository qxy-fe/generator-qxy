import { defineConfig } from 'tsdown'

export default defineConfig({
  clean: true,
  entry: ['src/**/*.ts', '!**/templates/*.ts'],
  onSuccess: 'npm run copy',
  outDir: 'generators',
  shims: true,
  target: ['es2022', 'node18'],
})
