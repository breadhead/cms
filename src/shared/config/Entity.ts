import { RelationKind } from './RelationKind'
import { FieldType } from './FieldType'
import { FieldFlag } from './FieldFlag'
import { EntityFlag } from './EntityFlag'
import { SecurityLevel } from './SecutityLevel'

interface Child {
  name: string
  entity: Entity
}

interface Relation {
  name: string
  entity?: Entity
  entityName?: string
  kind: RelationKind
}

interface Child {
  name: string
  entity: Entity
}

interface Field {
  name: String
  type: FieldType
  flags?: FieldFlag[]
}

interface Security {
  create?: SecurityLevel
  edit?: SecurityLevel
  delete?: SecurityLevel
  show?: SecurityLevel
}

export interface Entity {
  name: string
  fields: Field[]
  children: Child[]
  relations: Relation[]
  flags?: EntityFlag
  security?: Security
}
