import BaseGenerator from '../base-generator'

export default class LeftHookGenerator extends BaseGenerator {
  writing() {
    // ====================
    // Generate config
    // ====================

    this.fs.copy(
      this.templatePath('lefthook.yaml'),
      this.destinationPath('lefthook.yaml'),
    )

    // ====================
    // Add devDependencies
    // ====================
    this.addDeps({ devDeps: ['lefthook'] })

    // ====================
    // Add Scripts
    // ====================
    this.addFields({
      scripts: {
        prepare: 'lefthook install',
      },
    })
  }
}
