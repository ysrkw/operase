import { describe, expect, test } from 'vitest'

import { sum } from './sum.js'

describe('sum', () => {
  test('1 + 2 = 3', () => {
    expect(sum(1, 2)).toBe(3)
  })
})
