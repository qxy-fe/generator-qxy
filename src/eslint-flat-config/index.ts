import BaseGenerator from '../base-generator'

export default class ESLintFlatConfigGenerator extends BaseGenerator {
  writing() {
    // ===================
    // Generate config
    // ===================
    this.fs.copy(this.templatePath('eslint.config.mjs'), this.destinationPath('eslint.config.mjs'))

    this.addFields({
      scripts: {
        lint: 'eslint .',
      },
      prettier: '@ntnyq/prettier-config',
    })

    this.extendVSCodeSettings({
      'eslint.enable': true,
      'prettier.enable': true,
      'editor.formatOnSave': true,
      'eslint.experimental.useFlatConfig': true,
      'eslint.validate': [
        'vue',
        'yaml',
        'html',
        'json',
        'jsonc',
        'json5',
        'markdown',
        'javascript',
        'typescript',
        'javascriptreact',
        'typescriptreact',
      ],
    })

    // ===================
    // Add devDependencies
    // ===================
    this.addDeps({
      devDeps: [
        'eslint',
        'prettier',
        'typescript',
        '@ntnyq/prettier-config',
        {
          name: '@ntnyq/eslint-config',
          tag: 'next',
        },
      ],
    })
  }
}
