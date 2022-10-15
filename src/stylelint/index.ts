import BaseGenerator from '../base-generator.js'

export default class StylelintGenerator extends BaseGenerator {
  writing () {
    const devDeps = [
      `stylelint`,
      `prettier`,
      `@qxy/stylelint-config`,
    ]

    this.fs.copyTpl(
      this.templatePath(`_stylelint.config.js`),
      this.destinationPath(`stylelint.config.js`),
    )

    this.addFields({
      scripts: {
        'lint:style': `stylelint "src/**/*.{vue,scss}"`,
      },
    })

    this.addDeps({ devDeps })
  }
}
