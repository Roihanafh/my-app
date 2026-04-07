import { render, screen } from "@testing-library/react"
import Home from "@/pages/index"

describe("Home Page", () => {
  it("renders title and subtitle correctly", () => {
    const view = render(<Home />)

    expect(screen.getByText("Praktikum Next.js Pages Router")).toBeInTheDocument()
    expect(screen.getByText("Mahasiswa D4 Pengembangan Web")).toBeInTheDocument()

    expect(view).toMatchSnapshot()
  })

  it("displays main heading", () => {
    const { container } = render(<Home />)
    const h1 = container.querySelector('h1')
    expect(h1?.textContent).toBe("Praktikum Next.js Pages Router")
  })

  it("displays subtitle paragraph", () => {
    const { container } = render(<Home />)
    const p = container.querySelector('p')
    expect(p?.textContent).toBe("Mahasiswa D4 Pengembangan Web")
  })
})
