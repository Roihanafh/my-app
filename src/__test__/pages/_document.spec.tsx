import React from 'react'
import { render } from '@testing-library/react'
import Document from '@/pages/_document'

describe('Pages | _document', () => {
  it('renders document component', () => {
    expect(() => render(<Document />)).not.toThrow()
  })

  it('has correct lang attribute for indonesian', () => {
    const { container } = render(<Document />)
    const html = container.querySelector('html')
    expect(html?.getAttribute('lang')).toBe('id')
  })
})
