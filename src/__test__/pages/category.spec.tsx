import { render, screen } from "@testing-library/react"
import HalamanCategory from "@/pages/category/[...slug]"

jest.mock("next/router", () => ({
  useRouter: () => ({
    query: { slug: ["tech", "gadgets"] },
    pathname: "/category/[...slug]",
    route: "/category/[...slug]",
    asPath: "/category/tech/gadgets",
    push: jest.fn(),
  }),
}))

describe("Category Page", () => {
  it("renders category page with slug parameters", () => {
    const view = render(<HalamanCategory />)
    expect(screen.getByText("Halaman Category")).toBeInTheDocument()
    expect(screen.getByText("Total Parameter: 2")).toBeInTheDocument()
    expect(view).toMatchSnapshot()
  })

  it("displays category heading", () => {
    const { container } = render(<HalamanCategory />)
    const h1 = container.querySelector('h1')
    expect(h1?.textContent).toBe("Halaman Category")
  })

  it("displays parameter count", () => {
    render(<HalamanCategory />)
    expect(screen.getByText("Total Parameter: 2")).toBeInTheDocument()
  })
})
