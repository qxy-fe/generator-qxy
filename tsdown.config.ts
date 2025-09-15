import { defineConfig } from 'tsdown'

export default defineConfig({
  clean: true,
  entry: ['src/**/*.ts', '!**/templates/*.ts'],
  onSuccess: 'npm run copy',
  outDir: 'generators',
  // use `.js` extension
  platform: 'browser',
  shims: true,
  target: ['es2023', 'node18'],
})
