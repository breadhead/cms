import { bootstrap } from './back/bootstrap'
import { Entity, normalizeEntity, NormalizedEntity } from './shared/config'

type Plugin = any

class Cms {
  private readonly normalizedEntities: NormalizedEntity[]
  private readonly plugins: Plugin[]

  constructor(entities: Entity[]) {
    this.normalizedEntities = entities.map(normalizeEntity)
    this.plugins = []
  }

  public use(...plugins: Plugin[]): Cms {
    this.plugins.push(...plugins)
    return this
  }

  public run(port: number) {
    console.log(this.plugins)
    console.log(this.normalizedEntities)
    return bootstrap(port)
  }
}

export const cms = (entities: Entity[]) => new Cms(entities)
