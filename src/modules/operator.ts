import { Brand } from 'effect'

import { createOperatorId, OperatorId } from './operator-id'
import { createOperatorName, OperatorName } from './operator-name'

export type Operator = Brand.Brand<'Operator'> & {
  id: OperatorId
  name: OperatorName
}

const Operator = Brand.nominal<Operator>()

export function createOperator(value: {
  name: string
}): Operator {
  return Operator({
    id: createOperatorId(),
    name: createOperatorName(value.name),
  })
}
