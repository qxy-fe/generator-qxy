import { defineConfig } from 'tsup'

export default defineConfig({
  entry: [
    `src/**/*.ts`,
  ],
  ignoreWatch: [
    `src/**/templates/*`,
  ],
  outDir: `generators`,
  shims: true,
  clean: true,
  format: [`esm`, `cjs`],
  dts: true,
  onSuccess: `npm run copy`,
})
