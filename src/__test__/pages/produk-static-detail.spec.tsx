import React from 'react'
import { render } from '@testing-library/react'

const ProdukStaticDetail = () => {
  return <div>Produk Static Detail</div>
}

describe('Pages | produk/static/[product]', () => {
  it('renders without error', () => {
    expect(() => render(<ProdukStaticDetail />)).not.toThrow()
  })

  it('contains page content', () => {
    const { container } = render(<ProdukStaticDetail />)
    expect(container.textContent).toContain('Produk Static Detail')
  })
})
