import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    // required for test generators
    threads: false,
    testTimeout: 60_000,
    coverage: {
      reporter: ['lcov', 'html', 'json', 'text'],
    },
  },
})
