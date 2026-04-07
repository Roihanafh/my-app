import { render, screen } from "@testing-library/react"
import Custom404 from "@/pages/404"

describe("404 Page", () => {
  it("renders 404 message and back link", () => {
    const view = render(<Custom404 />)

    expect(screen.getByText("404 - Halaman Tidak Ditemukan")).toBeInTheDocument()
    expect(screen.getByText("Maaf, halaman yang Anda cari tidak ditemukan.")).toBeInTheDocument()

    expect(view).toMatchSnapshot()
  })

  it("displays 404 heading", () => {
    const { container } = render(<Custom404 />)
    const h1 = container.querySelector('h1')
    expect(h1?.textContent).toContain("404")
  })

  it("displays error message", () => {
    render(<Custom404 />)
    expect(screen.getByText("Maaf, halaman yang Anda cari tidak ditemukan.")).toBeInTheDocument()
  })
})
