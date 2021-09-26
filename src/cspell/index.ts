import BaseGenerator from '../base-generator'

export default class CSpellGenerator extends BaseGenerator {
  async writing(): Promise<void> {
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
    await this.addDeps({ devDeps: ['cspell'] })
  }
}
