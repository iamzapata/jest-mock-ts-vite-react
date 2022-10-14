import { useWindowSize } from "react-use"

const MOBILE_WIDTH_BREAKPOINT = 768
const MOBILE_HEIGHT_BREAKPOINT = 480

const useIsMobile = () => {
  const { width, height } = useWindowSize()

  return width <= MOBILE_WIDTH_BREAKPOINT || height <= MOBILE_HEIGHT_BREAKPOINT
}

export default useIsMobile
