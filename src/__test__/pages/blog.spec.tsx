import { render, screen } from "@testing-library/react"
import HalamanBlog from "@/pages/blog/[slug]"

jest.mock("next/router", () => ({
  useRouter: () => ({
    pathname: "/blog/[slug]",
    query: { slug: "test-blog" },
    asPath: "/blog/test-blog",
    route: "/blog/[slug]",
    push: jest.fn(),
  }),
}))

describe("Blog Page", () => {
  it("renders blog page with slug parameter", () => {
    const view = render(<HalamanBlog />)
    expect(screen.getByText("Halaman Blog")).toBeInTheDocument()
    expect(view).toMatchSnapshot()
  })

  it("displays the slug value from router query", () => {
    render(<HalamanBlog />)
    expect(screen.getByText("Slug: test-blog")).toBeInTheDocument()
  })

  it("contains document title and slug heading", () => {
    const { container } = render(<HalamanBlog />)
    const h1 = container.querySelector('h1')
    const p = container.querySelector('p')
    expect(h1?.textContent).toBe("Halaman Blog")
    expect(p?.textContent).toBe("Slug: test-blog")
  })
})
