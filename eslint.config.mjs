// @ts-check

import { defineESLintConfig } from '@ntnyq/eslint-config'

export default defineESLintConfig({
  ignores: ['generators'],
  specials: {
    specialCaseConfigs: [
      {
        files: ['**/biome.json?([c5])'],
        name: 'ntnyq/specials/sort-json-keys',
        rules: {
          'jsonc/sort-keys': [
            'error',
            {
              order: { type: 'asc' },
              pathPattern: '.*',
            },
          ],
        },
      },
    ],
  },
})
