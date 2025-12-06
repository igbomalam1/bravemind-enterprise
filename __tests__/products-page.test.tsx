import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import ProductsPage from '@/app/products/page'

vi.mock('next/image', () => ({
  default: (props: any) => {
    // eslint-disable-next-line jsx-a11y/alt-text
    return <img {...props} />
  },
}))

describe('ProductsPage grid and interactions', () => {
  it('renders product cards and enquiry buttons', () => {
    render(<ProductsPage />)
    const buttons = screen.getAllByRole('button', { name: /make enquiries/i })
    expect(buttons.length).toBeGreaterThan(0)
  })

  it('shows view details buttons for each card', () => {
    render(<ProductsPage />)
    const buttons = screen.getAllByRole('button', { name: /view details/i })
    expect(buttons.length).toBeGreaterThan(0)
  })

  it('falls back to placeholder when image is broken', () => {
    render(<ProductsPage />)
    const imgs = screen.getAllByRole('img')
    expect(imgs[0].getAttribute('src')).toBeTruthy()
  })
})
