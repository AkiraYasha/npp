import { DiscordClient } from '@npp/discord/DiscordClient'
import { DiscordTypes } from '@npp/discord/DiscordTypes'
import { Module } from '@npp/core/Module'

export class DiscordModule extends Module {
  public async register(): Promise<void> {
    this.bind<DiscordClient>(DiscordTypes.CLIENT)
      .to(DiscordClient)
      .inSingletonScope()
  }
}
