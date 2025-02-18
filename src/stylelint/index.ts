import BaseGenerator from '../base-generator'

export default class StylelintGenerator extends BaseGenerator {
  writing() {
    const devDeps = [
      'stylelint',
      'prettier',
      'postcss',
      '@qxy/stylelint-config',
    ]

    this.fs.copy(
      this.templatePath('stylelint.config.cjs'),
      this.destinationPath('stylelint.config.cjs'),
    )

    this.addFields({
      scripts: {
        'lint:style': 'stylelint "src/**/*.{vue,scss}"',
      },
    })

    this.addDeps({ devDeps })
  }
}
