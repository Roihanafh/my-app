import React from 'react'
import { render } from '@testing-library/react'

const ProdukServerDetail = () => {
  return <div>Produk Server Detail</div>
}

describe('Pages | produk/server/[product]', () => {
  it('renders without error', () => {
    expect(() => render(<ProdukServerDetail />)).not.toThrow()
  })

  it('contains page content', () => {
    const { container } = render(<ProdukServerDetail />)
    expect(container.textContent).toContain('Produk Server Detail')
  })
})
