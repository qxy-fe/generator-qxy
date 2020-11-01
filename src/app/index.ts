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

    // Meta files
    editorconfig: boolean

    // Dev Workflows
    lsLint: boolean
    prettier: boolean
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
          { name: 'Git meta files', value: 'git' },
        ],
        default: ['vscode', 'editorconfig', 'readme', 'git'],
      },
      {
        type: 'checkbox',
        name: 'workflow',
        message: 'Select development workflow you want too initialize',
        choices: [
          { name: 'Prettier', value: 'prettier' },
          { name: 'Files & Directories Lint', value: 'ls-lint' },
          { name: 'Sort package.json', value: 'sort-package-json' },
        ],
        default: ['prettier', 'ls-lint', 'sort-package-json'],
      },
    ])

    this.props = {
      packageManager: answers.packageManager,
      registry: answers.registry,

      // Meta files
      editorconfig: answers.meta.includes('editorconfig'),

      // Dev workflow
      prettier: answers.workflow.includes('prettier'),
      lsLint: answers.workflow.includes('ls-lint'),
      sortPackageJson: answers.workflow.includes('sort-package-json'),
    }
  }

  default(): void {
    // ==================================
    // meta files
    // ==================================
    if (this.props.packageManager === 'yarn') {
      this.composeWith(require.resolve('../meta/yarnrc'), {
        registry: registryUrls[this.props.registry],
      })
    }

    if (this.props.editorconfig) {
      this.composeWith(require.resolve('../meta/editorconfig'), {})
    }

    // ==================================
    // workflow
    // ==================================
    if (this.props.prettier) {
      this.composeWith(require.resolve('../workflow/prettier'), {
        sharedConfig: '@qxy/prettier-config',
      })
    }

    if (this.props.lsLint) {
      this.composeWith(require.resolve('../workflow/ls-lint'), {})
    }

    if (this.props.sortPackageJson) {
      this.composeWith(require.resolve('../workflow/sort-package-json'), {})
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
