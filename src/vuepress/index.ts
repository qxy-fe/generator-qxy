import BaseGenerator from '../base-generator.js'

export default class VuepressGenerator extends BaseGenerator {
  writing () {
    this.fs.copy(
      this.templatePath(`config.ts.ejs`),
      this.destinationPath(`docs/.vuepress/config.ts`),
    )

    this.fs.copy(
      this.templatePath(`README.md`),
      this.destinationPath(`docs/README.md`),
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
    this.addDeps({
      devDeps: [`vue`, `vuepress@next`, `@vuepress/client@next`],
    })
  }
}
