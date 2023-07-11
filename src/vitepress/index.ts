import BaseGenerator from '../base-generator'

interface Options {
  targetDir: string
  repoName: string
  username: string
}

export default class VitePressGenerator extends BaseGenerator<Options> {
  constructor(args: string | string[], options: Options) {
    super(args, options)

    this.option('username', {
      type: String,
      default: 'ntnyq',
      description: 'your github username',
    })

    this.option('repoName', {
      type: String,
      default: '',
      description: 'your github repo name',
    })

    this.option('targetDir', {
      type: String,
      default: 'docs',
      description: 'your docs target dir',
    })
  }

  write() {
    const targetDir = this.options.targetDir || '.'
    const injectData = {
      repoName: this.options.repoName,
      username: this.options.username,
    }

    this.fs.copy(this.templatePath('index.md'), this.destinationPath(targetDir, 'index.md'))
    this.fs.copyTpl(
      this.templatePath('.vitepress/config.ts.ejs'),
      this.destinationPath(targetDir, '.vitepress/config.ts'),
      injectData,
    )
    this.fs.copyTpl(
      this.templatePath('.vitepress/config/head.ts.ejs'),
      this.destinationPath(targetDir, '.vitepress/config/head.ts'),
      injectData,
    )
    this.fs.copyTpl(
      this.templatePath('.vitepress/config/theme.ts.ejs'),
      this.destinationPath(targetDir, '.vitepress/config/theme.ts'),
      injectData,
    )

    // ==================
    // Add devDependencies
    // ==================
    this.addDeps({
      devDeps: ['vitepress'],
    })

    this.addFields({
      scripts: {
        'docs:dev': `vitepress dev ${targetDir}`,
        'docs:build': `vitepress build ${targetDir}`,
      },
    })
  }
}
