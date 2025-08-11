import { describe, expect, test } from 'vitest'

import { createOperatorName } from './operator-name'

describe('createOperatorName', () => {
  test('無効な名前はエラーになる', () => {
    expect(() => createOperatorName('')).toThrow()
  })

  test('空白はトリミングされる', () => {
    expect(createOperatorName('  foo  ')).toBe('foo')
  })
})
