import { render } from "@testing-library/react"
import EditorToolbar from "@/components/editor/EditorToolbar"

describe("EditorToolbar Component", () => {
  it("renders editor toolbar without crashing", () => {
    const view = render(<EditorToolbar />)
    expect(view).toMatchSnapshot()
  })
})
