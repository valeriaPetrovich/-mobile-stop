import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgMap = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={22}
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M15.2 1.2c-1.8 1.8-1.5 4.3.8 6.9l2 2.4 2-2.4C23.2 4.4 22.1 0 18 0c-.9 0-2.1.5-2.8 1.2zM19 4c0 .5-.4 1-1 1-.5 0-1-.5-1-1 0-.6.5-1 1-1 .6 0 1 .4 1 1z" />
    <Path d="M5.8 4.2C3.1 5.1 3 5.4 3 13.1c0 4.3.2 7.9.4 7.9.3 0 1.6-.4 3-1 1.7-.6 3.5-.6 5.2.1 1.9.6 3.7.6 6-.1 3.1-1.1 3.4-1.5 3.4-5.1 0-2.4-.4-3.8-1-3.4-.5.3-1 1.9-1 3.6 0 1.9-.5 2.9-1.5 2.9S16 17 16 14.6c0-1.9-.4-3.8-1-4.1-.6-.4-1 1-1 3.5 0 3.4-.3 4.1-1.7 3.8-1.4-.2-1.9-1.5-2.1-5.7-.2-3.4.1-5.7.9-6.1 1.4-.9.3-3-1.4-2.9-.7 0-2.4.5-3.9 1.1zM8 12c0 4.7-.3 6-1.5 6S5 16.7 5 12s.3-6 1.5-6S8 7.3 8 12z" />
  </Svg>
)
export default SvgMap