import BaseGenerator from '../base-generator'

export = class VuepressGenerator extends BaseGenerator {
  writing(): void {
    // TODO: custom docs content
    this.fs.copy(
      this.templatePath('config.js'),
      this.destinationPath('docs/.vuepress')
    )

    this.fs.copy(this.templatePath('README.md'), this.destinationPath('docs'))

    this.addFields({
      scripts: {
        'dev:docs': `vuepress dev docs`,
        'build:docs': `vuepress build docs`,
      },
    })

    // ==================
    // Add devDependencies
    // ==================
    this.addDependencies({ devDeps: ['vuepress'] })
  }
}
