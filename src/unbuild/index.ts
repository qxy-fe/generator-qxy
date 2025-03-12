import BaseGenerator from '../base-generator'

export default class UnBuildGenerator extends BaseGenerator {
  writing() {
    this.fs.copy(
      this.templatePath('build.config.ts.ejs'),
      this.destinationPath('build.config.ts'),
    )

    // ====================
    // Add devDependencies
    // ====================
    this.addDeps({ devDeps: ['unbuild'] })

    // ====================
    // Add Scripts
    // ====================
    this.addFields({
      scripts: {
        build: 'unbuild',
        dev: 'unbuild --watch',
        stub: 'unbuild --stub',
      },
    })
  }
}
