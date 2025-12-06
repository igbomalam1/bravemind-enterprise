import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ProductsSection } from '@/components/products-section'

describe('ProductsSection', () => {
  it('renders exactly 6 featured products on landing', () => {
    render(<ProductsSection />)
    const cards = screen.getAllByRole('button', { name: /make enquiries/i })
    expect(cards.length).toBe(6)
  })

  it('has a link to view more products', () => {
    render(<ProductsSection />)
    const link = screen.getByRole('link', { name: /view more products/i })
    expect(link).toHaveAttribute('href', '/products')
  })
})
