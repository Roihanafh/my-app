import { render, screen } from "@testing-library/react"
import PasswordUserPage from "@/pages/user/password/index"

describe("Password User Page", () => {
  it("renders password user page correctly", () => {
    const view = render(<PasswordUserPage />)
    expect(screen.getByText("Password User Page")).toBeInTheDocument()
    expect(view).toMatchSnapshot()
  })
})
