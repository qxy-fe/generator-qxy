import BaseGenerator from '../base-generator'

export default class OxfmtGenerator extends BaseGenerator {
  writing() {
    // ====================
    // Add devDependencies
    // ====================
    this.addDeps({ devDeps: ['oxfmt'] })

    // ====================
    // Add Scripts
    // ====================
    this.addFields({
      scripts: {
        format: 'oxfmt',
        'format:check': 'oxfmt --check',
      },
    })

    // ====================
    // Generate config
    // ====================

    this.fs.copy(
      this.templatePath('.oxfmtrc.json'),
      this.destinationPath('.oxfmtrc.json'),
    )
  }
}
