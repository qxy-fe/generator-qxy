import BaseGenerator from '../base-generator'

export default class PrettierGenerator extends BaseGenerator {
  writing() {
    this.addFields({
      scripts: {
        format: 'prettier -uw .',
      },
    })

    this.addDeps({ devDeps: ['prettier', '@ntnyq/prettier-config'] })

    this.fs.copyTpl(
      this.templatePath('prettier.config.mjs'),
      this.destinationPath('prettier.config.mjs'),
    )

    // prettierIgnore in package.json is not supported
    // https://github.com/prettier/prettier/issues/3460
    this.fs.copy(
      this.templatePath('_prettierignore'),
      this.destinationPath('.prettierignore'),
    )
  }
}
