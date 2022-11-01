import BaseGenerator from '../base-generator.js'

export default class StylelintGenerator extends BaseGenerator {
  writing () {
    const devDeps = [
      `stylelint`,
      `prettier`,
      `@qxy/stylelint-config`,
    ]

    this.fs.copyTpl(
      this.templatePath(`stylelint.config.cjs`),
      this.destinationPath(`stylelint.config.cjs`),
    )

    this.addFields({
      scripts: {
        'lint:style': `stylelint "src/**/*.{vue,scss}"`,
      },
    })

    this.addDeps({ devDeps })
  }
}
