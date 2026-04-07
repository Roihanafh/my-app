import { render, screen } from "@testing-library/react"
import TampilanProduk from "@/pages/produk"

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/produk",
      pathname: "",
      query: {},
      asPath: "",
      push: jest.fn(),
      event: {
        on: jest.fn(),
        off: jest.fn(),
      },
      isReady: true,
    }
  },
}))

describe("Product Page", () => {
  it("renders product page correctly", () => {
    const page = render(<TampilanProduk />)
    // expect(screen.getByTestId("title").textContent).toBe("Product Page")
    expect(page).toMatchSnapshot()
  })

  it("should render div container for product list", () => {
    const { container } = render(<TampilanProduk />)
    expect(container.querySelector('div')).toBeInTheDocument()
  })

  it("renders TampilanProduk component without error", () => {
    expect(() => render(<TampilanProduk />)).not.toThrow()
  })
})