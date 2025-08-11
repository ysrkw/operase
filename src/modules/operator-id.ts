import { isValid, ulid } from 'ulid'

import { BrandType } from '../utils/brand-type'

export type OperatorId = BrandType<string, 'operatorId'>

class InvalidOperatorId extends Error {
  constructor() {
    super('Invalid OperatorId')
  }
}

export function createOperatorId(value: unknown = ulid()): OperatorId {
  if (typeof value !== 'string') throw new InvalidOperatorId()

  const operatorId = value

  if (!isValid(operatorId)) throw new InvalidOperatorId()

  return operatorId as OperatorId
}
