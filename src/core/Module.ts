import { AsyncContainerModule, interfaces } from 'inversify'

export abstract class Module {
  protected bind!: interfaces.Bind
  protected unbind!: interfaces.Unbind
  protected isBound!: interfaces.IsBound
  protected rebind!: interfaces.Rebind

  public abstract async register(): Promise<void>

  public build(): AsyncContainerModule {
    return new AsyncContainerModule(
      async (
        bind: interfaces.Bind,
        unbind: interfaces.Unbind,
        isBound: interfaces.IsBound,
        rebind: interfaces.Rebind
      ) => {
        try {
          this.bind = bind
          this.unbind = unbind
          this.isBound = isBound
          this.rebind = rebind

          await this.register()
        } finally {
          this.bind = undefined!
          this.unbind = undefined!
          this.isBound = undefined!
          this.rebind = undefined!
        }
      }
    )
  }
}
