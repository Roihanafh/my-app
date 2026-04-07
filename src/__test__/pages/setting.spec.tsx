import { render, screen } from "@testing-library/react"
import AppSetting from "@/pages/setting/app"

describe("App Setting Page", () => {
  it("renders app setting page correctly", () => {
    const view = render(<AppSetting />)
    expect(screen.getByText("App Setting Page")).toBeInTheDocument()
    expect(view).toMatchSnapshot()
  })
})
