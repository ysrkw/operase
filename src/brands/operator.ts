import { BrandType } from './brand-type'

export interface Operator {
  id: OperatorId
  name: OperatorName
}

export type OperatorId = BrandType<string, 'operatorId'>
export type OperatorName = BrandType<string, 'operatorName'>
