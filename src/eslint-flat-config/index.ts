import BaseGenerator from '../base-generator.js'

export default class ESLintFlatConfigGenerator extends BaseGenerator {
  writing() {
    // ===================
    // Generate config
    // ===================
    const devDeps = [
      'eslint',
      'prettier',
      'typescript',
      'eslint-define-config',
      '@ntnyq/prettier-config',
      '@ntnyq/eslint-config@next',
    ]

    this.fs.copy(this.templatePath('eslint.config.mjs'), this.destinationPath('eslint.config.mjs'))

    this.addFields({
      scripts: {
        lint: 'ESLINT_USE_FLAT_CONFIG=true eslint -c eslint.config.mjs --max-warnings 0 .',
      },
      prettier: '@ntnyq/prettier-config',
    })

    this.appendToFile(this.destinationPath('.npmrc'), '\nshell-emulator=true')

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
    this.addDeps({ devDeps })
  }
}
