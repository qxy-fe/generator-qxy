import hasYarn from 'has-yarn'
import { createRequire } from 'node:module'
import BaseGenerator from '../base-generator.js'

const registryUrls = {
  npm: 'https://registry.npmjs.org',
  yarn: 'https://registry.yarnpkg.com',
  taobao: 'https://registry.npm.taobao.org',
  default: '',
}
const require = createRequire(import.meta.url)

export default class QxyGenerator extends BaseGenerator {
  protected props: {
    packageManager: 'npm' | 'yarn'
    registry: 'default' | 'yarn' | 'npm' | 'taobao'

    // Languages
    vue: boolean
    typescript: boolean

    // Meta files
    editorconfig: boolean
    readme: boolean
    git: boolean
    vscode: boolean
    jsconfig: boolean

    // Dev Workflow
    vueCli: boolean
    lerna: boolean
    husky: boolean
    cSpell: boolean
    eslint: boolean
    lsLint: boolean
    prettier: boolean
    vuepress: boolean
    lintStaged: boolean
    commitlint: boolean
    sortPackageJson: boolean
    lernaVersionIndependent: boolean
  }

  // eslint-disable-next-line max-lines-per-function
  async prompting(): Promise<void> {
    const answers = await this.prompt([
      {
        type: 'confirm',
        name: 'lerna',
        message: 'Use lerna or not',
        default: false,
      },
      {
        type: 'confirm',
        name: 'lernaVersionIndependent',
        message: 'Use lerna independent mode nor not',
        default: false,
        when: (ans): boolean => ans.lerna,
      },
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
        name: 'template',
        message: 'Select a template to use',
        choices: [
          { name: 'Base', value: 'base' },
          { name: 'Vue', value: 'vue' },
          { name: 'Typescript', value: 'typescript' },
          { name: 'Typescript + Vue', value: 'typescript-vue' },
        ],
        default: 'base',
      },
      {
        type: 'checkbox',
        name: 'meta',
        message: 'Select meta files you want to initialize',
        choices: [
          { name: 'VsCode settings', value: 'vscode' },
          { name: 'Editor config', value: 'editorconfig' },
          { name: 'README.md', value: 'readme' },
          { name: 'Git Meta files', value: 'git' },
          { name: 'JavaScript config', value: 'jsconfig' },
        ],
        default: ['vscode', 'editorconfig', 'readme', 'git'],
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
          { name: 'CommitLint', value: 'commitlint' },
          { name: 'VuePress docs', value: 'vuepress' },
          { name: 'Code Spell Check', value: 'cspell' },
          { name: 'Files & Directories Lint', value: 'ls-lint' },
          { name: 'Sort package.json', value: 'sort-package-json' },
        ],
        default: [
          'husky',
          'cspell',
          'eslint',
          'prettier',
          'ls-lint',
          'commitlint',
          'lint-staged',
          'sort-package-json',
        ],
      },
      {
        type: 'confirm',
        name: 'vueCli',
        message: 'Use vue-cli?',
        default: false,
        when: (ans): boolean => ans.template.includes('vue'),
      },
    ])

    this.props = {
      packageManager: answers.packageManager,
      registry: answers.registry,

      // Languages
      vue: ['vue', 'typescript-vue'].includes(answers.template),
      typescript: ['typescript', 'typescript-vue'].includes(answers.template),

      // Meta files
      editorconfig: answers.meta.includes('editorconfig'),
      readme: answers.meta.includes('readme'),
      git: answers.meta.includes('git'),
      vscode: answers.meta.includes('vscode'),
      jsconfig: answers.meta.includes('jsconfig'),

      // Dev workflow
      vueCli: answers.vueCli,
      lerna: answers.lerna,
      lernaVersionIndependent: answers.lernaVersionIndependent,
      husky: answers.workflow.includes('husky'),
      cSpell: answers.workflow.includes('cspell'),
      eslint: answers.workflow.includes('eslint'),
      lsLint: answers.workflow.includes('ls-lint'),
      prettier: answers.workflow.includes('prettier'),
      vuepress: answers.workflow.includes('vuepress'),
      lintStaged: answers.workflow.includes('lint-staged'),
      commitlint: answers.workflow.includes('commitlint'),
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

    if (this.props.git) {
      this.composeWith(require.resolve('../git'), {
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

    if (this.props.vscode) {
      this.composeWith(require.resolve('../vscode'), {
        typescript: this.props.typescript,
        vue: this.props.vue,
      })
    }

    if (this.props.jsconfig) {
      this.composeWith(require.resolve('../jsconfig'), {})
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
        commitlint: this.props.commitlint,
        lintStaged: this.props.lintStaged,
      })
    }

    if (this.props.cSpell) {
      this.composeWith(require.resolve('../cspell'), {})
    }

    if (this.props.eslint) {
      this.composeWith(require.resolve('../eslint'), {
        vue: this.props.vue,
        vueCli: this.props.vueCli,
        lerna: this.props.lerna,
        typescript: this.props.typescript,
      })
    }

    if (this.props.lsLint) {
      this.composeWith(require.resolve('../ls-lint'), {})
    }

    if (this.props.lintStaged) {
      this.composeWith(require.resolve('../lint-staged'), {
        typescript: this.props.typescript,
        vue: this.props.vue,
        vueCli: this.props.vueCli,
        eslint: this.props.eslint,
        prettier: this.props.prettier,
        sortPackageJson: this.props.sortPackageJson,
      })
    }

    if (this.props.vuepress) {
      this.composeWith(require.resolve('../vuepress'), {})
    }

    if (this.props.commitlint) {
      this.composeWith(require.resolve('../commitlint'), {
        lerna: this.props.lerna,
        sharedConfig: '',
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
  }
}
