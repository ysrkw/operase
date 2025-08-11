import { describe, expect, test } from 'vitest'

import { createOperatorId } from './operator-id'

describe('createOperatorId', () => {
  test('無効なIDはエラーになる', () => {
    expect(() => createOperatorId('')).toThrow()
    expect(() => createOperatorId('01ARYZ6S41TSV4RRFFQ69G5FA')).toThrow()
  })
})
