import { type GeneratorOptions } from 'yeoman-generator'
import BaseGenerator from '../base-generator.js'

/**
 * Get the shortcut of eslint config
 *
 * @param config input config
 *
 * @returns output config
 */
function getConfigShortcut (config: string): string {
  config = config.replace(`eslint-config`, ``)

  return config.endsWith(`/`) ? config.slice(0, -1) : config
}

export default class EslintGenerator extends BaseGenerator {
  protected vue: boolean

  protected vueCli: boolean

  protected lerna: boolean

  protected typescript: boolean

  constructor (args: string | string[], options: GeneratorOptions) {
    super(args, options)

    this.option(`vue`, {
      type: Boolean,
      default: false,
      description: `use vue or not`,
    })

    this.option(`vueCli`, {
      type: Boolean,
      default: false,
      description: `use vue-cli or not`,
    })

    this.option(`lerna`, {
      type: Boolean,
      default: false,
      description: `use lerna or not`,
    })

    this.option(`typescript`, {
      type: Boolean,
      default: false,
      description: `use typescript or not`,
    })
  }

  initializing () {
    this.vue = this.options.vue
    this.vueCli = this.options.vueCli
    this.lerna = this.options.lerna
    this.typescript = this.options.typescript
  }

  writing () {
    // ===================
    // Generate config
    // ===================
    const devDeps = [`eslint`, `@qxy/eslint-config`]
    const exts = [`.js`, `.jsx`]
    let extendsConfig = [`@qxy/eslint-config`]

    const lintDirs = [
      this.lerna ? `packages` : this.vue || this.typescript ? `src` : `lib`,
    ]

    if (this.vue) {
      extendsConfig = [`@qxy/eslint-config-vue`]
      exts.push(`.vue`)

      if (!this.typescript) {
        devDeps.push(`babel-eslint`)
      }
    }

    if (this.typescript) {
      extendsConfig.push(`plugin:@typescript-eslint/recommended`)
      extendsConfig.push(`plugin:import/typescript`)
      devDeps.push(`@typescript-eslint/eslint-plugin`)
      devDeps.push(`@typescript-eslint/parser`)
      exts.push(`.ts`)
      exts.push(`.tsx`)
    }

    extendsConfig = extendsConfig.map(getConfigShortcut)

    this.fs.copy(
      this.templatePath(`_eslintignore`),
      this.destinationPath(`.eslintignore`),
    )

    this.fs.copyTpl(
      this.templatePath(`_eslintrc.js.ejs`),
      this.destinationPath(`.eslintrc.js`),
      {
        extendsConfig,
        vue: this.vue,
        typescript: this.typescript,
        exts,
      },
    )

    const lint = this.vueCli
      ? `vue-cli-service lint --no-fix`
      : `eslint --ext ${exts.join(`,`)} ${lintDirs.join(` `)}`

    this.addFields({ scripts: { lint } })

    // ===================
    // Add devDependencies
    // ===================
    this.addDeps({ devDeps })
  }
}
