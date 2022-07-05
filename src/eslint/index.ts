import BaseGenerator from '../base-generator.js'

export default class EslintGenerator extends BaseGenerator {
  writing () {
    // ===================
    // Generate config
    // ===================
    const devDeps = [
      `eslint`,
      `typescript`,
      `@qxy/eslint-config`,
    ]

    this.fs.copy(
      this.templatePath(`_eslintrc.js`),
      this.destinationPath(`.eslintrc.js`),
    )

    this.addFields({
      scripts: {
        lint: `eslint .`,
      },
    })

    // ===================
    // Add devDependencies
    // ===================
    this.addDeps({ devDeps })
  }
}
