import React from 'react'
import { render } from '@testing-library/react'
import HalamanProduk from '@/pages/produk/[product]'

jest.mock('next/router', () => ({
  useRouter: () => ({
    query: { product: 'test-product' },
    pathname: '/produk/[product]',
    route: '/produk/[product]',
    asPath: '/produk/test-product',
    push: jest.fn(),
  }),
}))

jest.mock('swr', () => ({
  __esModule: true,
  default: () => ({
    data: { data: { id: '1', name: 'Test', price: 100000, description: 'Test product' } },
    error: null,
    isLoading: false,
  }),
}))

describe('Pages | Produk Detail', () => {
  it('renders detail product page', () => {
    expect(() => render(<HalamanProduk />)).not.toThrow()
  })

  it('displays content', () => {
    const { container } = render(<HalamanProduk />)
    expect(container).toBeInTheDocument()
  })
})
