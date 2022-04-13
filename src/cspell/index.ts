import BaseGenerator from '../base-generator.js'

export default class CSpellGenerator extends BaseGenerator {
  writing(): void {
    this.fs.copy(
      this.templatePath(`_cspell.json`),
      this.destinationPath(`cspell.json`),
    )

    this.addFields({
      scripts: {
        'lint:cspell': `cspell **`,
      },
    })

    // ==================
    // Add devDependencies
    // ==================
    this.addDeps({ devDeps: [`cspell`, `@qxy/cspell-dict`] })
  }
}
