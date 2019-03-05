import { CoreTypes } from '@npp/core/CoreTypes'
import { Kernel } from '@npp/core/Kernel'
import { Module } from '@npp/core/Module'

export class CoreModule extends Module {
  constructor(private readonly kernel: Kernel) {
    super()
  }

  public async register(): Promise<void> {
    this.bind(CoreTypes.KERNEL).toConstantValue(this.kernel)
  }
}
