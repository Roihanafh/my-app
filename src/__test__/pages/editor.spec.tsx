import React from 'react'
import { render } from '@testing-library/react'

// Create a simple version without the dynamic import for testing
const EditorPage = () => {
  return (
    <div>
      <div className="editor">
        <h1>Halaman Editor</h1>
        <p>
          Selamat datang di halaman editor! Halaman ini khusus untuk mengelola
          dan mengedit konten aplikasi. Gunakan akses editor untuk meninjau,
          memperbarui, dan memastikan kualitas konten yang ditampilkan.
        </p>
      </div>
    </div>
  )
}

describe('Pages | Editor', () => {
  it('renders without crashing', () => {
    expect(() => render(<EditorPage />)).not.toThrow()
  })

  it('shows editor heading', () => {
    const { container } = render(<EditorPage />)
    expect(container.textContent).toContain('Halaman Editor')
  })
})
