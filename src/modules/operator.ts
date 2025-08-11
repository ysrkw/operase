import { BrandType } from '../utils/brand-type'
import { createOperatorId, OperatorId } from './operator-id'
import { createOperatorName, OperatorName } from './operator-name'

export type Operator = BrandType<{
  id: OperatorId
  name: OperatorName
}, 'operator'>

interface OperatorProperties {
  id: string
  name: string
}

export function createOperator(properties: OperatorProperties): Operator {
  return {
    id: createOperatorId(properties.id),
    name: createOperatorName(properties.name),
  } as Operator
}
