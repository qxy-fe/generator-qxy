import { defineConfig } from 'tsup'

export default defineConfig({
  entry: [
    `src/**/*.ts`,
  ],
  ignoreWatch: [
    `src/**/templates/*`,
  ],
  outDir: `generators`,
  clean: true,
  format: [`esm`],
  dts: true,
  onSuccess: `npm run copy`,
})
