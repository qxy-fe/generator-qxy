import { ensurePrefix, ensureSuffix } from '../utils.js'
import BaseGenerator from '../base-generator.js'
import type { Questions } from 'yeoman-generator'

interface PromptAnswers {
  sharedConfig: string
  overrides: boolean
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

  ensureConfigPattern(config: string) {
    return ensurePrefix('@', ensureSuffix('/prettier-config', config))
  }

  async prompting() {
    const answers = await this.prompt<PromptAnswers>(this.questions)

    this.sharedConfig = answers.sharedConfig
    this.overrides = answers.overrides
  }

  writing() {
    const sharedConfig = this.ensureConfigPattern(this.sharedConfig)
    const devDeps = ['prettier', sharedConfig]

    this.addFields({
      scripts: {
        format: 'prettier --uw .',
      },
      ...(this.overrides ? {} : { prettier: sharedConfig }),
    })

    this.addDeps({ devDeps })

    if (!this.overrides) return // overrides
    this.fs.copyTpl(
      this.templatePath('prettier.config.cjs'),
      this.destinationPath('prettier.config.cjs'),
      { sharedConfig },
    )

    // prettierIgnore in package.json is not supported
    // https://github.com/prettier/prettier/issues/3460
    this.fs.copy(this.templatePath('_prettierignore'), this.destinationPath('.prettierignore'))
  }
}
