import BaseGenerator from '../base-generator'

export default class NanoStagedGenerator extends BaseGenerator {
  writing() {
    // ==================
    // Generate config
    // ==================
    this.addFields({
      'nano-staged': {
        '*.{js,ts,cjs,mjs,vue,json,yaml,yml,md}': 'eslint --fix',
      },
    })

    // ==================
    // Add devDependencies
    // ==================
    this.addDeps({ devDeps: ['nano-staged'] })
  }
}
