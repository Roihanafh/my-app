import { render, screen } from "@testing-library/react"
import HalamanAdmin from "@/pages/admin/index"

describe("Admin Page", () => {
  it("renders admin page with title and welcome message", () => {
    const view = render(<HalamanAdmin />)
    expect(screen.getByText("Halaman Admin")).toBeInTheDocument()
    expect(screen.getByText(/Selamat datang di halaman admin/)).toBeInTheDocument()
    expect(view).toMatchSnapshot()
  })

  it("displays admin heading correctly", () => {
    const { container } = render(<HalamanAdmin />)
    const h1 = container.querySelector('h1')
    expect(h1?.textContent).toBe("Halaman Admin")
  })

  it("displays welcome message paragraph", () => {
    const { container } = render(<HalamanAdmin />)
    const p = container.querySelector('p')
    expect(p?.textContent).toContain("Selamat datang di halaman admin")
  })
})
