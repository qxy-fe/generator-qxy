import BaseGenerator from '../base-generator'

export default class DPrintGenerator extends BaseGenerator {
  writing() {
    this.fs.copy(
      this.templatePath('dprint.json'),
      this.destinationPath('dprint.json'),
    )

    this.addFields({
      scripts: {
        format: 'dprint fmt',
      },
    })

    // ==================
    // Add devDependencies
    // ==================
    this.addDeps({ devDeps: ['dprint'] })
  }
}
