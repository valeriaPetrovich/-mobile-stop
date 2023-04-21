import * as React from "react"
import Svg,{Path} from "react-native-svg"
const SvgLightStar = (props) => (
<Svg
xmlns="http://www.w3.org/2000/svg"
width={116}
height={109}
fill="none"
{...props}
>
<Path
  stroke="#000"
  d="m58 1.618 12.995 39.996.113.345h42.417L79.502 66.677l-.293.214.112.346 12.995 39.995-34.022-24.719L58 82.3l-.294.213-34.022 24.719 12.995-39.995.112-.346-.293-.214L2.475 41.96h42.417l.113-.346L58 1.619Z"
/>
</Svg>
)
export default SvgLightStar
