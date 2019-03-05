import { inject, injectable } from 'inversify'

import { AppTypes } from '@npp/AppTypes'
import { Config } from '@npp/Config'
import Discord from 'discord.js'

@injectable()
export class DiscordClient {
  private client: Discord.Client

  constructor(@inject(AppTypes.CONFIG) private readonly config: Config) {
    this.client = new Discord.Client()

    this.client.on('ready', () => {
      console.log(`Logged in as ${this.client.user.tag}`)
    })

    this.client.on('message', msg => {
      if (msg.content === 'ping') {
        msg.reply('pong')
      }
    })
  }

  public start() {
    this.client.login(this.config.discordToken)
  }
}
