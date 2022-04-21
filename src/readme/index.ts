import { type GeneratorOptions } from 'yeoman-generator'
import BaseGenerator from '../base-generator.js'

export default class ReadmeGenerator extends BaseGenerator {
  protected username: string

  protected projectName: string

  protected projectDesc: string

  protected package: boolean

  constructor (args: string | string[], options: GeneratorOptions) {
    super(args, options)

    this.option(`username`, {
      type: String,
      default: this.user.git.name(),
      description: `username`,
    })

    this.option(`projectName`, {
      type: String,
      default: ``,
      description: `project name`,
    })

    this.option(`projectDesc`, {
      type: String,
      default: ``,
      description: `project description`,
    })

    this.option(`package`, {
      type: Boolean,
      default: false,
      description: `is this a package`,
    })
  }

  initializing () {
    this.username = this.options.username
    this.projectName = this.options.projectName
    this.projectDesc = this.options.projectDesc
    this.package = this.options.package
  }

  writing () {
    this.fs.copyTpl(
      this.templatePath(`README.md.ejs`),
      this.destinationPath(`README.md`),
      {
        username: this.username,
        projectName: this.projectName,
        projectDesc: this.projectDesc,
        package: this.package,
      },
    )
  }
}
