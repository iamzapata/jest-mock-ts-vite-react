import { App } from "./App"
import { render } from "@testing-library/react"

jest.mock("react-use", () => ({
  useWindowSize: jest
    .fn()
    .mockReturnValueOnce({ height: 850 })
    .mockReturnValueOnce({ height: 900 })
    .mockReturnValueOnce({ height: 900 }),
}))

jest.mock("./useIsMobile", () =>
  jest
    .fn()
    .mockReturnValueOnce(false)
    .mockReturnValueOnce(true)
    .mockReturnValueOnce(false)
)

describe("<App />", () => {
  it("container position is 'static' when height is greater than 800", () => {
    const { container } = render(<App />)
    expect(container.firstElementChild).toHaveStyle("position: sticky")
  })

  it("container position is 'static' on mobile", () => {
    const { container } = render(<App />)
    expect(container.firstElementChild).toHaveStyle("position: static")
  })

  it("container position is 'sticky' on desktop", () => {
    const { container } = render(<App />)
    expect(container.firstElementChild).toHaveStyle("position: sticky")
  })
})
