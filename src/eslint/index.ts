import BaseGenerator from '../base-generator'
import type { GeneratorOptions } from 'yeoman-generator'

export = class EslintGenerator extends BaseGenerator {
  protected vue: boolean

  protected vueCli: boolean

  protected lerna: boolean

  protected typescript: boolean

  constructor(args: string | string[], options: GeneratorOptions) {
    super(args, options)

    this.option('vue', {
      type: Boolean,
      default: false,
      description: 'use vue or not',
    })

    this.option('vueCli', {
      type: Boolean,
      default: false,
      description: 'use vue-cli or not',
    })

    this.option('lerna', {
      type: Boolean,
      default: false,
      description: 'use lerna or not',
    })

    this.option('typescript', {
      type: Boolean,
      default: false,
      description: 'use typescript or not',
    })
  }

  initializing(): void {
    this.vue = this.options.vue
    this.vueCli = this.options.vueCli
    this.lerna = this.options.lerna
    this.typescript = this.options.typescript
  }

  writing(): void {
    // ===================
    // Generate config
    // ===================

    const extendsConfig = ['@qxy/eslint-config']
    const devDeps = ['eslint']
    const exts = ['.js', '.jsx']

    const lintDirs = [
      this.lerna ? 'packages' : this.vue || this.typescript ? 'src' : 'lib',
    ]

    if (this.typescript) {
      extendsConfig.push('plugin:@typescript-eslint/recommended')
      extendsConfig.push('plugin:import/typescript')
      devDeps.push('@typescript-eslint/eslint-plugin')
      devDeps.push('@typescript-eslint/parser')
      exts.push('.ts')
      exts.push('.tsx')
    }

    if (this.vue) {
      extendsConfig.push('@qxy/eslint-config-vue')
      exts.push('.vue')

      if (!this.typescript) {
        devDeps.push('babel-eslint')
      }
    }

    this.fs.copy(
      this.templatePath('.eslintignore'),
      this.destinationPath('.eslintignore')
    )

    this.fs.copyTpl(
      this.templatePath('.eslintrc.js.ejs'),
      this.destinationPath('.eslintrc.js'),
      {
        extendsConfig,
        vue: this.vue,
        typescript: this.typescript,
        exts,
      }
    )

    const lint = this.vueCli
      ? `vue-cli-service lint --no-fix`
      : `eslint --ext ${exts.join('m')} ${lintDirs.join(' ')}`

    this.addFields({ scripts: { lint } })

    // ===================
    // Add devDependencies
    // ===================
    this.addDependencies({ devDeps })
  }
}
