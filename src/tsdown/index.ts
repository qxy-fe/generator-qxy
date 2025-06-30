import BaseGenerator from '../base-generator'

export default class TsDownGenerator extends BaseGenerator {
  writing() {
    this.fs.copy(
      this.templatePath('tsdown.config.ts.ejs'),
      this.destinationPath('tsdown.config.ts'),
    )

    // ====================
    // Add devDependencies
    // ====================
    this.addDeps({ devDeps: ['tsdown'] })

    // ====================
    // Add Scripts
    // ====================
    this.addFields({
      scripts: {
        build: 'tsdown',
        dev: 'tsdown --watch',
      },
    })
  }
}
