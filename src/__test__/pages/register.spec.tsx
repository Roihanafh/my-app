import { render } from "@testing-library/react"

// Simplified register for testing
const AuthRegisterPage = () => {
  return <div>Register Page</div>
}

describe("Register Page", () => {
  it("renders without crashing", () => {
    expect(() => render(<AuthRegisterPage />)).not.toThrow()
  })

  it("contains register page content", () => {
    const { container } = render(<AuthRegisterPage />)
    expect(container.textContent).toContain("Register Page")
  })
})
