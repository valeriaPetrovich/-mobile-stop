import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgBurger = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M2 6c0 .6 4 1 10 1s10-.4 10-1-4-1-10-1S2 5.4 2 6zM2 12c0 .6 4 1 10 1s10-.4 10-1-4-1-10-1-10 .4-10 1zM2 18c0 .6 4 1 10 1s10-.4 10-1-4-1-10-1-10 .4-10 1z" />
  </Svg>
)
export default SvgBurger