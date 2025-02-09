import BaseGenerator from '../base-generator'

export default class ESLintGenerator extends BaseGenerator {
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
      'editor.defaultFormatter': 'esbenp.prettier-vscode',
      'editor.codeActionsOnSave': {
        'source.fixAll.eslint': 'explicit',
        'source.organizeImports': 'never',
        'source.sortImports': 'never',
      },
      'eslint.validate': [
        'vue',
        'yaml',
        'toml',
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
        '@ntnyq/eslint-config',
      ],
    })
  }
}
