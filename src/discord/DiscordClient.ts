import Discord from 'discord.js'
import { injectable } from 'inversify'

@injectable()
export class DiscordClient {
  private client: Discord.Client

  constructor() {
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

  public start(token: string) {
    this.client.login(token)
  }
}
