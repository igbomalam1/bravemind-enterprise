import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { ProductsSection } from '@/components/products-section'

// next/image mock to avoid SSR-specific behavior in tests
vi.mock('next/image', () => ({
  default: (props: any) => {
    // eslint-disable-next-line jsx-a11y/alt-text
    return <img {...props} />
  },
}))

describe('Product image gallery', () => {
  it('opens gallery and switches preview on thumbnail click', async () => {
    render(<ProductsSection />)

    const openButtons = screen.getAllByRole('button', { name: /open image gallery/i })
    expect(openButtons.length).toBeGreaterThan(0)

    fireEvent.click(openButtons[0])

    const thumbnails = await screen.findAllByRole('button', { name: /view thumbnail/i })
    expect(thumbnails.length).toBe(3)

    fireEvent.click(thumbnails[1])

    const largeImage = await screen.findByRole('img', { name: /preview/i })
    expect(largeImage).toBeInTheDocument()
  })
})
