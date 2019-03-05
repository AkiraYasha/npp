import { AppModule } from '@npp/AppModule'
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
    const client = this.kernel.get<DiscordClient>(DiscordTypes.CLIENT)

    const token = process.env.NPP_DISCORD_TOKEN
    if (!token) {
      throw new Error('Please provide a valid discord token via the environment variable: NPP_DISCORD_TOKEN')
    }

    client.start(token)
  }
}

export async function main(argv: string[]) {
  const app = new Application()
  await app.initialize()
  await app.run(argv.slice(2))
}
