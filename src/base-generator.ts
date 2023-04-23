import ora from 'ora'
import Generator from 'yeoman-generator'

export default class BaseGenerator<T extends Record<string, any> = {}> extends Generator<T> {
  protected addFields(fields: Record<string, unknown>) {
    this.fs.extendJSON(this.destinationPath('package.json'), fields)
  }

  protected reduceDeps(deps: string[]): Record<string, string> {
    return deps.reduce((obj, dep) => ({ ...obj, [dep]: this.getPackageVersion(dep) }), {})
  }

  protected addDeps({ deps = [], devDeps = [] }: { deps?: string[]; devDeps?: string[] }) {
    const dependencies: Record<string, string> = this.reduceDeps(deps)
    const devDependencies: Record<string, string> = this.reduceDeps(devDeps)

    this.fs.extendJSON(this.destinationPath('package.json'), {
      dependencies,
      devDependencies,
    })
  }

  protected getStdoutString(cmd: string, args: string[]) {
    const result = this.spawnCommandSync(cmd, args, { stdio: [process.stdout] })
    return Buffer.from(result.stdout).toString()
  }

  protected getPackageVersion(pkg: string) {
    if (process.env.NODE_ENV === 'test') return '^0.0.0' // speedUp test
    const spinner = ora(`Loading the latest version of package: ${pkg}`)
    spinner.start()
    const version = this.getStdoutString('npm', ['show', pkg, 'version'])
    spinner.succeed(`${pkg}@${version}`)
    return pkg.includes('@') ? version : `^${version}` // pin version for non latest pkg
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
