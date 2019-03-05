import { Container } from 'inversify'
import { CoreModule } from '@npp/core/CoreModule'
import { Module } from '@npp/core/Module'

export class Kernel {
  private container: Container

  constructor() {
    this.container = new Container()

    this.load(new CoreModule(this))
  }

  public async load(module: Module): Promise<void> {
    return this.container.loadAsync(module.build())
  }

  public get<T>(serviceIdentifier: string | symbol): T {
    return this.container.get<T>(serviceIdentifier)
  }
}
