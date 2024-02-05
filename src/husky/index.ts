import BaseGenerator from '../base-generator'

export default class HuskyGenerator extends BaseGenerator {
  writing() {
    // ====================
    // Generate config
    // ====================

    this.fs.copy(this.templatePath('pre-commit'), this.destinationPath('.husky/pre-commit'))

    // ====================
    // Add devDependencies
    // ====================
    this.addDeps({ devDeps: ['husky'] })

    // ====================
    // Add Scripts
    // ====================
    this.addFields({
      scripts: {
        prepare: 'husky',
      },
    })
  }
}
