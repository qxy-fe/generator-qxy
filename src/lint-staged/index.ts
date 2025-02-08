import BaseGenerator from '../base-generator'

export default class LintStagedGenerator extends BaseGenerator {
  writing() {
    // ==================
    // Generate config
    // ==================
    this.addFields({
      'lint-staged': {
        '*.{js,ts,cjs,mjs,vue,json,yaml,yml,md}': 'eslint --fix',
        '*.{css,scss,html}': 'prettier -uw',
      },
    })

    // ==================
    // Add devDependencies
    // ==================
    this.addDeps({ devDeps: ['lint-staged'] })
  }
}
