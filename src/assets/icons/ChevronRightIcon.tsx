import React from 'react';

import Svg, {Path} from 'react-native-svg';

import {BaseIconProps} from '@components';

export function ChevronRightIcon({size = 32, color = 'black'}: BaseIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.0572 7.05727C11.5779 6.53657 12.4221 6.53657 12.9428 7.05727L20.9428 15.0573C21.4635 15.578 21.4635 16.4222 20.9428 16.9429L12.9428 24.9429C12.4221 25.4636 11.5779 25.4636 11.0572 24.9429C10.5365 24.4222 10.5365 23.578 11.0572 23.0573L18.1144 16.0001L11.0572 8.94289C10.5365 8.42219 10.5365 7.57797 11.0572 7.05727Z"
        fill={color}
      />
    </Svg>
  );
}
