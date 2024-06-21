import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const ProfileSvg = (props: SvgProps) => (
  <Svg width={23} height={24} fill="none" {...props}>
    <Path
      fill={props?.color}
      d="M10.053 2c-.435.096-.882.156-1.304.293-2.333.756-3.926 3.141-3.733 5.56.207 2.595 2.092 4.684 4.584 5.076 3.07.485 5.87-1.57 6.34-4.651.443-2.898-1.629-5.74-4.514-6.198-.16-.025-.319-.053-.479-.08h-.895ZM10.997 23h9.197c.564 0 .813-.24.806-.776-.055-3.924-3.021-7.32-7.063-8.07a8.842 8.842 0 0 0-1.411-.14c-.97-.02-1.94-.015-2.91-.006-3.872.036-7.28 2.55-8.3 6.117-.199.698-.306 1.41-.316 2.134-.006.489.257.741.776.741h9.22Z"
    />
  </Svg>
);
export default ProfileSvg;
