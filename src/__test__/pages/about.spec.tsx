import { render, screen} from "@testing-library/react"
import AboutPage from "@/pages/about"

describe("About Page", () => {
  it("renders about page correctly", () => {
    const page = render(<AboutPage />)
    // expect(screen.getByTestId("title")).toBe("About")
    expect(page).toMatchSnapshot()
  })

  it("renders without error", () => {
    expect(() => render(<AboutPage />)).not.toThrow()
  })

  it("displays about page content", () => {
    const { container } = render(<AboutPage />)
    expect(container).toBeDefined()
  })
})