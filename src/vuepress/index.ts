import BaseGenerator from '../base-generator'

export = class VuepressGenerator extends BaseGenerator {
  writing(): void {
    // TODO: custom docs content
    this.fs.copy(
      this.templatePath('config.js'),
      this.destinationPath('docs/.vuepress/config.js'),
    )

    this.fs.copy(
      this.templatePath('README.md'),
      this.destinationPath('docs/README.md'),
    )

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
