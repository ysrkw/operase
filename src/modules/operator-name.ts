import { Brand } from 'effect'

export type OperatorName = Brand.Brand<'OperatorName'> & string

const OperatorName = Brand.refined<OperatorName>(
  v => v.length > 0,
  v => Brand.error(`Invalid OperatorName: ${v}`),
)

export function createOperatorName(value: string): OperatorName {
  return OperatorName(value.trim())
}
