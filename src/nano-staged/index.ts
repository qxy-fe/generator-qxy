import BaseGenerator from '../base-generator.js'

export default class NanoStagedGenerator extends BaseGenerator {
  writing() {
    // ==================
    // Generate config
    // ==================
    this.addFields({
      'nano-staged': {
        '*.{js,ts,vue,json,yaml,yml,md}': 'eslint --fix',
      },
    })

    // ==================
    // Add devDependencies
    // ==================
    this.addDeps({ devDeps: ['nano-staged'] })
  }
}
