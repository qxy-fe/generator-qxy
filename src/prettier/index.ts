import { ensurePrefix, ensureSuffix } from '../utils'
import BaseGenerator from '../base-generator'
import type { Questions } from 'yeoman-generator'

interface PromptAnswers {
  sharedConfig: string
  overrides: boolean
}

function ensurePrettierConfig(config: string) {
  return ensurePrefix('@', ensureSuffix('/prettier-config', config))
}

export default class PrettierGenerator extends BaseGenerator {
  protected sharedConfig: string
  protected overrides: boolean

  private questions: Questions = [
    {
      type: 'input',
      name: 'sharedConfig',
      message: 'sharedConfig to use',
      default: '@qxy/prettier-config',
    },
    {
      type: 'confirm',
      name: 'overrides',
      message: 'overrides sharedConfig',
      default: false,
    },
  ]

  async prompting() {
    const answers = await this.prompt<PromptAnswers>(this.questions)

    this.sharedConfig = answers.sharedConfig
    this.overrides = answers.overrides
  }

  writing() {
    const sharedConfig = ensurePrettierConfig(this.sharedConfig)
    const devDeps = ['prettier', sharedConfig]

    this.addFields({
      scripts: {
        format: 'prettier -uw .',
      },
      ...(this.overrides ? {} : { prettier: sharedConfig }),
    })

    this.addDeps({ devDeps })

    if (!this.overrides) return // overrides
    this.fs.copyTpl(
      this.templatePath('prettier.config.cjs.ejs'),
      this.destinationPath('prettier.config.cjs'),
      { sharedConfig },
    )

    // prettierIgnore in package.json is not supported
    // https://github.com/prettier/prettier/issues/3460
    this.fs.copy(this.templatePath('_prettierignore'), this.destinationPath('.prettierignore'))
  }
}
