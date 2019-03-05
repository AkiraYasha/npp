import { AppTypes } from '@npp/AppTypes'
import { Application } from '@npp/Application'
import { Config } from './Config'
import { Module } from '@npp/core/Module'

export class AppModule extends Module {
  constructor(private readonly app: Application) {
    super()
  }

  public async register(): Promise<void> {
    this.bind<Application>(AppTypes.APPLICATION).toConstantValue(this.app)
    this.bind<Config>(AppTypes.CONFIG)
      .to(Config)
      .inSingletonScope()
  }
}
