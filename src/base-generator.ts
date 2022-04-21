import Generator from 'yeoman-generator'
import ora from 'ora'

export default class BaseGenerator extends Generator {
  protected addFields (fields: Record<string, unknown>) {
    this.fs.extendJSON(this.destinationPath(`package.json`), fields)
  }

  protected addDeps ({ deps = [], devDeps = [] }: {
    deps?: string[]
    devDeps?: string[]
  }) {
    const dependencies: Record<string, string> = {}
    const devDependencies: Record<string, string> = {}

    deps.forEach(item => {
      dependencies[item] = `^${this.getPackageVersion(item)}`
    })

    devDeps.forEach(item => {
      devDependencies[item] = `^${this.getPackageVersion(item)}`
    })

    this.fs.extendJSON(this.destinationPath(`package.json`), {
      dependencies,
      devDependencies,
    })
  }

  protected getStdoutString (cmd: string, args: string[]) {
    const result = this.spawnCommandSync(cmd, args, {
      stdio: [process.stdout],
    })

    return Buffer.from(result.stdout).toString()
  }

  protected getPackageVersion (pkg: string) {
    const spinner = ora(`Loading the latest version of package: ${pkg}`)
    spinner.start()
    const version = this.getStdoutString(`npm`, [`show`, pkg, `version`])
    spinner.succeed(`${pkg}@${version}`)
    return version
  }

  end () {
    this.log(`Bye... 👋`)
  }
}
