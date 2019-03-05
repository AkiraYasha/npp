import { injectable } from 'inversify'

@injectable()
export class Config {
  public get discordToken(): string | undefined {
    return process.env.NPP_DISCORD_TOKEN
  }

  public validate() {
    if (!this.discordToken) {
      throw new Error('Please provide a valid discord token via the environment variable: NPP_DISCORD_TOKEN')
    }
  }
}
