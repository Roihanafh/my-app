import React from 'react'
import { render } from '@testing-library/react'
import HalamanProdukStatic from '@/pages/produk/static'

jest.mock('@/views/product', () => {
  return function MockTampilanProduk() {
    return <div>Tampilan Produk</div>
  }
})

describe('Pages | Produk Static', () => {
  it('renders static product page without crashing', () => {
    expect(() => 
      render(<HalamanProdukStatic products={[]} />)
    ).not.toThrow()
  })

  it('shows static page heading correctly', () => {
    const { container } = render(<HalamanProdukStatic products={[]} />)
    const h1 = container.querySelector('h1')
    expect(h1?.textContent).toContain('Halaman Produk Static')
  })
})
