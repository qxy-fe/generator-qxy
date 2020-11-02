import BaseGenerator from '../base-generator'
import hasYarn from 'has-yarn'

const registryUrls = {
  npm: 'https://registry.npmjs.org',
  yarn: 'https://registry.yarnpkg.com',
  taobao: 'https://registry.npm.taobao.org',
  default: '',
}

export = class QxyGenerator extends BaseGenerator {
  protected props: {
    packageManager: 'npm' | 'yarn'
    registry: 'default' | 'yarn' | 'npm' | 'taobao'

    // Languages
    vue: boolean
    typescript: boolean

    // Meta files
    editorconfig: boolean
    readme: boolean
    gitignore: boolean

    // Dev Workflow
    husky: boolean
    eslint: boolean
    lsLint: boolean
    prettier: boolean
    lintStaged: boolean
    sortPackageJson: boolean
  }

  // eslint-disable-next-line max-lines-per-function
  async prompting(): Promise<void> {
    const answers = await this.prompt([
      {
        type: 'list',
        name: 'packageManager',
        message: 'Select a package manager',
        choices: [
          { name: 'npm', value: 'npm' },
          { name: 'yarn', value: 'yarn' },
        ],
        default: hasYarn(this.destinationRoot()) ? 'yarn' : 'npm',
      },
      {
        type: 'list',
        name: 'registry',
        message: 'Select a registry to use',
        choices: [
          { name: 'default', value: 'default' },
          { name: 'npm', value: 'npm' },
          { name: 'yarn', value: 'yarn' },
          { name: 'taobao', value: 'taobao' },
        ],
        default: 'default',
      },
      {
        type: 'checkbox',
        name: 'meta',
        message: 'Select meta files you want to initialize',
        choices: [
          { name: 'VsCode settings', value: 'vscode' },
          { name: 'Editor config', value: 'editorconfig' },
          { name: 'README.md', value: 'readme' },
          { name: 'Git Ignore files', value: 'gitignore' },
        ],
        default: ['vscode', 'editorconfig', 'readme', 'gitignore'],
      },
      {
        type: 'checkbox',
        name: 'workflow',
        message: 'Select development workflow you want too initialize',
        choices: [
          { name: 'Husky', value: 'husky' },
          { name: 'ESLint', value: 'eslint' },
          { name: 'Prettier', value: 'prettier' },
          { name: 'Lint staged', value: 'lint-staged' },
          { name: 'Files & Directories Lint', value: 'ls-lint' },
          { name: 'Sort package.json', value: 'sort-package-json' },
        ],
        default: [
          'husky',
          'eslint',
          'prettier',
          'ls-lint',
          'lint-staged',
          'sort-package-json',
        ],
      },
    ])

    this.props = {
      packageManager: answers.packageManager,
      registry: answers.registry,

      // Languages
      vue: ['vue', 'typescript-vue'].includes(answers.template),
      typescript: ['typescript', ['typescript-vue']].includes(answers.template),

      // Meta files
      editorconfig: answers.meta.includes('editorconfig'),
      readme: answers.meta.includes('readme'),
      gitignore: answers.meta.includes('gitignore'),

      // Dev workflow
      husky: answers.workflow.includes('husky'),
      eslint: answers.workflow.includes('eslint'),
      lsLint: answers.workflow.includes('ls-lint'),
      prettier: answers.workflow.includes('prettier'),
      lintStaged: answers.workflow.includes('lint-staged'),
      sortPackageJson: answers.workflow.includes('sort-package-json'),
    }
  }

  default(): void {
    // ==================================
    // meta files
    // ==================================
    if (this.props.packageManager === 'yarn') {
      this.composeWith(require.resolve('../yarnrc'), {
        registry: registryUrls[this.props.registry],
      })
    }

    if (this.props.editorconfig) {
      this.composeWith(require.resolve('../editorconfig'), {})
    }

    if (this.props.gitignore) {
      this.composeWith(require.resolve('../gitignore'), {
        typescript: this.props.typescript,
      })
    }

    if (this.props.readme) {
      this.composeWith(require.resolve('../readme'), {
        username: this.user.git.name(),
        projectName: '',
        projectDesc: '',
        package: false,
      })
    }

    // ==================================
    // workflow
    // ==================================
    if (this.props.prettier) {
      this.composeWith(require.resolve('../prettier'), {
        sharedConfig: '@qxy/prettier-config',
      })
    }

    if (this.props.husky) {
      this.composeWith(require.resolve('../husky'), {
        // commitlint: this.props.commitlint,
        lintStaged: this.props.lintStaged,
      })
    }

    if (this.props.lsLint) {
      this.composeWith(require.resolve('../ls-lint'), {})
    }

    if (this.props.lintStaged) {
      this.composeWith(require.resolve('../lint-staged'), {
        typescript: this.props.typescript,
        vue: this.props.vue,
        eslint: this.props.eslint,
        prettier: this.props.prettier,
        sortPackageJson: this.props.sortPackageJson,
      })
    }

    if (this.props.sortPackageJson) {
      this.composeWith(require.resolve('../sort-package-json'), {})
    }
  }

  install(): void {
    this.spawnCommandSync('node', [
      require.resolve('sort-package-json'),
      this.destinationPath('package.json'),
    ])

    if (this.props.packageManager === 'npm') {
      this.npmInstall()
    } else if (this.props.packageManager === 'yarn') {
      this.yarnInstall()
    }
  }
}
