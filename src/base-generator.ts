import { Buffer } from 'node:buffer'
import process from 'node:process'
import { createSpinner } from 'nanospinner'
import Generator from 'yeoman-generator'
import type { Dep, DepMap } from './types'

export default class BaseGenerator extends Generator {
  protected addFields(fields: Record<string, unknown>) {
    this.fs.extendJSON(this.destinationPath('package.json'), fields)
  }

  protected reduceDeps(deps: Dep[]): DepMap {
    return deps.reduce(
      (obj, dep) => ({
        ...obj,
        [typeof dep === 'string' ? dep : dep.name]: this.getPackageVersion(
          typeof dep === 'string' ? dep : `${dep.name}@${dep.tag}`,
        ),
      }),
      {},
    )
  }

  protected addDeps({ deps = [], devDeps = [] }: { deps?: Dep[]; devDeps?: Dep[] }) {
    const dependencies: DepMap = this.reduceDeps(deps)
    const devDependencies: DepMap = this.reduceDeps(devDeps)

    this.fs.extendJSON(this.destinationPath('package.json'), {
      dependencies,
      devDependencies,
    })
  }

  protected getStdoutString(cmd: string, args: string[]) {
    const result = this.spawnSync(cmd, args, { stdio: [process.stdout] })
    return Buffer.from(result.stdout).toString()
  }

  protected getPackageVersion(pkgName: string) {
    if (process.env.NODE_ENV === 'test') return '^0.0.0' // speedUp test
    const spinner = createSpinner(`Loading the latest version of package: ${pkgName}`)
    spinner.start()
    const version = this.getStdoutString('npm', ['show', pkgName, 'version'])
    spinner.success(`${pkgName}@${version}`)
    // pin version for non latest pkg, exclude organization scope
    return pkgName.includes('@') && !pkgName.startsWith('@') ? version : `^${version}`
  }

  protected extendVSCodeSettings(fields: Record<string, unknown>) {
    this.fs.extendJSON(this.destinationPath('.vscode/settings.json'), fields)
  }

  protected appendToFile(file: string, contents: string) {
    if (this.fs.exists(file)) {
      this.fs.append(file, contents)
    } else {
      this.fs.write(file, contents)
    }
  }

  end() {
    this.log('Bye... 👋')
  }
}
