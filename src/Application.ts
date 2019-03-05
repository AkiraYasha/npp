import { AppModule } from '@npp/AppModule'
import { AppTypes } from '@npp/AppTypes'
import { Config } from '@npp/Config'
import { DiscordClient } from '@npp/discord/DiscordClient'
import { DiscordModule } from '@npp/discord/DiscordModule'
import { DiscordTypes } from '@npp/discord/DiscordTypes'
import { Kernel } from '@npp/core/Kernel'

export class Application {
  private readonly kernel: Kernel

  constructor() {
    this.kernel = new Kernel()
  }

  public async initialize() {
    this.kernel.load(new AppModule(this))
    this.kernel.load(new DiscordModule())
  }

  public async run(argv: string[]) {
    const config = this.kernel.get<Config>(AppTypes.CONFIG)
    config.validate()

    const client = this.kernel.get<DiscordClient>(DiscordTypes.CLIENT)
    client.start()
  }
}

export async function main(argv: string[]) {
  const app = new Application()
  await app.initialize()
  await app.run(argv.slice(2))
}
