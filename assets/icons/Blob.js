import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      fill="#419F57"
      d="M137.3 50.2c3.6 8.4-6 27.2-2.6 44.1 3.4 16.8 19.9 31.8 21 45.3 1 13.5-13.3 25.7-29.1 29.7-15.8 4.1-33.1.1-50.7-5.4-17.6-5.4-35.4-12.3-37-24.2-1.5-11.9 13.2-28.7 19.4-44.2 6.1-15.6 3.5-29.8 9-37.8 5.6-8.1 19.1-10 34.3-11.9 15.2-2 32.1-4 35.7 4.4Z"
    />
  </Svg>
)

export default SvgComponent
