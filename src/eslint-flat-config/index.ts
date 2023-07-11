import BaseGenerator from '../base-generator'

export default class ESLintFlatConfigGenerator extends BaseGenerator {
  writing() {
    // ===================
    // Generate config
    // ===================
    this.fs.copy(this.templatePath('eslint.config.mjs'), this.destinationPath('eslint.config.mjs'))

    this.addFields({
      scripts: {
        lint: 'ESLINT_USE_FLAT_CONFIG=true eslint -c eslint.config.mjs --max-warnings 0 .',
      },
      prettier: '@ntnyq/prettier-config',
    })

    this.appendToFile(this.destinationPath('.npmrc'), 'shell-emulator=true')

    this.extendVSCodeSettings({
      'editor.formatOnSave': true,
      'eslint.experimental.useFlatConfig': true,
      'eslint.options': {
        overrideConfigFile: './eslint.config.mjs',
      },
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
        'eslint-define-config',
        '@ntnyq/prettier-config',
        {
          name: '@ntnyq/eslint-config',
          tag: 'next',
        },
      ],
    })
  }
}
