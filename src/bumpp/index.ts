import BaseGenerator from '../base-generator.js'

export default class BumppGenerator extends BaseGenerator {
  writing () {
    this.fs.copyTpl(
      this.templatePath(`release.yml`),
      this.destinationPath(`.github/workflows/release.yml`),
    )

    this.addFields({
      scripts: {
        release: `bumpp && pnpm publish`,
      },
    })

    // ==================
    // Add devDependencies
    // ==================
    this.addDeps({ devDeps: [`bumpp`] })
  }
}
