import { Brand } from 'effect'
import { isValid, ulid, ULID } from 'ulid'

export type OperatorId = Brand.Brand<'OperatorId'> & ULID

const OperatorId = Brand.refined<OperatorId>(
  v => isValid(v),
  v => Brand.error(`Invalid OperatorId: ${v}`),
)

export function createOperatorId(value = ulid()): OperatorId {
  return OperatorId(value)
}
