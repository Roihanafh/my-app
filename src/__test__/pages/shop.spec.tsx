import { render, screen } from "@testing-library/react"
import HalamanToko from "@/pages/shop/[[...slug]]"

jest.mock("next/router", () => ({
  useRouter: () => ({
    query: { slug: ["elektronik", "hp"] },
    pathname: "/shop/[[...slug]]",
    route: "/shop/[[...slug]]",
    asPath: "/shop/elektronik/hp",
    push: jest.fn(),
  }),
}))

describe("Shop Page", () => {
  it("renders shop page with slug parameters", () => {
    const view = render(<HalamanToko />)
    expect(screen.getByText("Halaman Toko")).toBeInTheDocument()
    expect(view).toMatchSnapshot()
  })

  it("displays slug information", () => {
    render(<HalamanToko />)
    expect(screen.getByText("Toko: elektronik-hp")).toBeInTheDocument()
  })

  it("displays category from slug", () => {
    render(<HalamanToko />)
    expect(screen.getByText("Kategori: elektronik")).toBeInTheDocument()
  })
})
