import { render, screen } from "@testing-library/react"
import HalamanProfile from "@/pages/profile/index"

jest.mock("next-auth/react", () => ({
  useSession: () => ({
    data: {
      user: {
        fullname: "Test User",
      },
    },
  }),
}))

describe("Profile Page", () => {
  it("renders profile page with user greeting", () => {
    const view = render(<HalamanProfile />)
    expect(screen.getByText("Halaman Profile")).toBeInTheDocument()
    expect(screen.getByText("Selamat Datang Test User")).toBeInTheDocument()
    expect(view).toMatchSnapshot()
  })

  it("displays profile heading", () => {
    const { container } = render(<HalamanProfile />)
    const h1 = container.querySelector('h1')
    expect(h1?.textContent).toBe("Halaman Profile")
  })

  it("displays greeting with user name", () => {
    render(<HalamanProfile />)
    expect(screen.getByText("Selamat Datang Test User")).toBeInTheDocument()
  })
})
