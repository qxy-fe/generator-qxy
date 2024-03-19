import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    // required for test generators
    pool: 'forks',
    testTimeout: 30_000,
    hookTimeout: 30_000,
    reporters: 'dot',
    coverage: {
      reporter: ['lcov', 'json', 'text'],
      include: ['**/generators/**'],
      exclude: ['**/templates/**'],
    },
  },
})
