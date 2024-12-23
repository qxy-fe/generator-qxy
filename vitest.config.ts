import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    hookTimeout: 30_000,
    // required for test generators
    pool: 'forks',
    reporters: ['dot'],
    testTimeout: 30_000,
    coverage: {
      exclude: ['**/templates/**'],
      include: ['**/generators/**'],
      reporter: ['lcov', 'text'],
    },
  },
})
