import { App } from "./App"
import { render } from "@testing-library/react"
import useIsMobile from "./useIsMobile"
import { useWindowSize } from "react-use"

jest.mock("react-use")
jest.mock("./useIsMobile")

describe("<App />", () => {
  it("container position is 'static' when height is greater than 800", () => {
    ;(useWindowSize as jest.Mock).mockReturnValueOnce({ height: 850 })
    ;(useIsMobile as jest.Mock).mockReturnValueOnce(false)
    const { container } = render(<App />)
    expect(container.firstElementChild).toHaveStyle("position: sticky")
  })

  it("container position is 'static' on mobile", () => {
    ;(useWindowSize as jest.Mock).mockReturnValueOnce({ height: 900 })
    ;(useIsMobile as jest.Mock).mockReturnValueOnce(true)
    const { container } = render(<App />)
    expect(container.firstElementChild).toHaveStyle("position: static")
  })

  it("container position is 'sticky' on desktop", () => {
    ;(useWindowSize as jest.Mock).mockReturnValueOnce({ height: 900 })
    ;(useIsMobile as jest.Mock).mockReturnValueOnce(false)
    const { container } = render(<App />)
    expect(container.firstElementChild).toHaveStyle("position: sticky")
  })
})
