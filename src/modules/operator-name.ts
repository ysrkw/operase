import { BrandType } from '../utils/brand-type'

export type OperatorName = BrandType<string, 'operatorName'>

class InvalidOperatorName extends Error {
  constructor() {
    super('Invalid OperatorName')
  }
}

export function createOperatorName(value: unknown): OperatorName {
  if (typeof value !== 'string') throw new InvalidOperatorName()

  const operatorName = value.trim()

  if (operatorName.length === 0) throw new InvalidOperatorName()

  return operatorName as OperatorName
}
