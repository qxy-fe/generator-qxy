import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    threads: false, // required for test generators
    testTimeout: 30_000,
    hookTimeout: 30_000,
    coverage: {
      reporter: ['lcov', 'html', 'json', 'text'],
    },
  },
})
