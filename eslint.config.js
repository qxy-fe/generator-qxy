import { defineFlatConfig } from 'eslint-define-config'
import { ntnyq } from '@ntnyq/eslint-config'

export default defineFlatConfig(
  ntnyq([{ ignores: ['generators'] }], {
    prettier: true,
    markdown: true,
  }),
)
