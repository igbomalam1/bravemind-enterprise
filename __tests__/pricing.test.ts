import { describe, it, expect } from 'vitest'
import { formatNaira, discountPercent } from '@/lib/utils'

describe('pricing utilities', () => {
  it('formats Naira currency correctly', () => {
    expect(formatNaira(1000000)).toMatch(/₦\s?1,000,000/)
  })

  it('computes discount percentage', () => {
    expect(discountPercent(1000000, 800000)).toBe(20)
    expect(discountPercent(0, 100)).toBe(0)
    expect(discountPercent(100, 150)).toBe(0)
  })
})
