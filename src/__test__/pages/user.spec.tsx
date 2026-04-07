import { render, screen } from "@testing-library/react"
import UserSettingPage from "@/pages/user/index"

describe("User Setting Page", () => {
  it("renders user setting page correctly", () => {
    const view = render(<UserSettingPage />)
    expect(screen.getByText("User Setting Page")).toBeInTheDocument()
    expect(view).toMatchSnapshot()
  })
})
