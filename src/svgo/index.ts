import BaseGenerator from '../base-generator.js'

export default class SVGOGenerator extends BaseGenerator {
  writing() {
    this.fs.copy(
      this.templatePath('svgo.config.mjs'),
      this.destinationPath('svgo.config.mjs'),
    )

    this.addFields({
      scripts: {
        svgo: 'svgo -f src/icons/svg',
      },
    })

    // ==================
    // Add devDependencies
    // ==================
    this.addDeps({ devDeps: ['svgo'] })
  }
}
