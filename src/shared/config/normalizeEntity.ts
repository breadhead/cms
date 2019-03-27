import { Entity } from './Entity'
import { NormalizedEntity } from './NormalizedEntity'

// TODO: write real normalizer
export const normalizeEntity = (entity: Entity): NormalizedEntity =>
  entity as any
