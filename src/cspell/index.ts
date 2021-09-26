import BaseGenerator from '../base-generator'

export default class CSpellGenerator extends BaseGenerator {
  writing(): void {
    this.fs.copy(
      this.templatePath('cspell.json'),
      this.destinationPath('cspell.json'),
    )

    this.addFields({
      scripts: {
        'lint:cspell': 'cspell **',
      },
    })

    // ==================
    // Add devDependencies
    // ==================
    this.addDeps({ devDeps: ['cspell'] })
  }
}
