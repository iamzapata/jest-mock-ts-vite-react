import { useState, useEffect, useRef } from "react"
import useIsMobile from "./useIsMobile"
import { useWindowSize } from "react-use"
import "./App.css"

function App() {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const { height } = useWindowSize()
  const isMinHeight = height < 800
  const isMobile = useIsMobile()

  useEffect(() => {
    if (!ref.current) return

    const container = ref.current
    if (isMobile || isMinHeight) {
      console.log({ isMobile, isMinHeight })
      container.style.position = "static"
    } else {
      container.style.position = "sticky"
    }
  }, [ref?.current, height, isMobile])

  return (
    <div className="App" ref={ref}>
      <h1>Jest Mocks</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export { App }
