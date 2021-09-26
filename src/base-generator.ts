import Generator from 'yeoman-generator'
import ora from 'ora'
import latestVersion from 'latest-version'

export default class BaseGenerator extends Generator {
  protected addFields(fields: Record<string, unknown>): void {
    this.fs.extendJSON(this.destinationPath('package.json'), fields)
  }

  protected addDeps({
    deps = [],
    devDeps = [],
  }: {
    deps?: string[]
    devDeps?: string[]
  }): void {
    const dependencies: Record<string, string> = {}
    const devDependencies: Record<string, string> = {}

    deps.forEach(async item => {
      dependencies[item] = `^${this.getPackageVersion(item)}`
    })

    devDeps.forEach(async item => {
      devDependencies[item] = `^${this.getPackageVersion(item)}`
    })

    this.fs.extendJSON(this.destinationPath('package.json'), {
      dependencies,
      devDependencies,
    })
  }

  protected async getPackageVersion(pkg: string): Promise<string> {
    const spinner = ora(`Loading the latest version of package: ${pkg}`)
    spinner.start()
    const version = await latestVersion(pkg)
    spinner.succeed(`${pkg}@${version}`)
    return version
  }

  end(): void {
    this.log('Bye... 👋')
  }
}
