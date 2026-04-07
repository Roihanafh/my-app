import { render, screen } from "@testing-library/react"
import Navbar from "@/components/layouts/navbar"

jest.mock("next-auth/react", () => ({
  useSession: () => ({ data: null }),
  signIn: jest.fn(),
  signOut: jest.fn(),
}))

describe("Navbar Component", () => {
  it("renders brand and sign in button correctly", () => {
    const view = render(<Navbar />)

    expect(screen.getByRole("button", { name: /sign in/i })).toBeInTheDocument()
    expect(view).toMatchSnapshot()
  })
})
