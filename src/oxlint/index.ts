import BaseGenerator from '../base-generator'

export default class OxlintGenerator extends BaseGenerator {
  writing() {
    // ====================
    // Add devDependencies
    // ====================
    this.addDeps({ devDeps: ['oxlint'] })

    // ====================
    // Add Scripts
    // ====================
    this.addFields({
      scripts: {
        lint: 'oxlint',
      },
    })

    // ====================
    // Generate config
    // ====================

    this.fs.copy(
      this.templatePath('.oxlintrc.jsonc'),
      this.destinationPath('.oxlintrc.jsonc'),
    )
  }
}
