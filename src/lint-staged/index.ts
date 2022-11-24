import BaseGenerator from '../base-generator.js'

export default class LintStagedGenerator extends BaseGenerator {
  writing () {
    // ==================
    // Generate config
    // ==================
    this.addFields({
      'lint-staged': {
        '*.{js,ts,vue,json,yml,yaml,md}': `eslint --fix`,
      },
    })

    // ==================
    // Add devDependencies
    // ==================
    this.addDeps({ devDeps: [`lint-staged`] })
  }
}
