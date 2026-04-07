import React from 'react'
import { render } from '@testing-library/react'
import HalamanProdukServer from '@/pages/produk/server'

jest.mock('@/views/product', () => {
  return function MockTampilanProduk() {
    return <div>Tampilan Produk</div>
  }
})

describe('Pages | Produk Server', () => {
  it('renders server product page without crashing', () => {
    expect(() => 
      render(<HalamanProdukServer products={[]} />)
    ).not.toThrow()
  })

  it('shows server heading correctly', () => {
    const { container } = render(<HalamanProdukServer products={[]} />)
    const h1 = container.querySelector('h1')
    expect(h1?.textContent).toContain('Halaman Produk Server')
  })
})
