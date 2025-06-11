import React from 'react';

import Svg, {Path} from 'react-native-svg';

import {BaseIconProps} from '@components';

export function MenuIcon({size = 32, color = 'black'}: BaseIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 8.00008C4 7.2637 4.59695 6.66675 5.33333 6.66675H26.6667C27.403 6.66675 28 7.2637 28 8.00008C28 8.73646 27.403 9.33341 26.6667 9.33341H5.33333C4.59695 9.33341 4 8.73646 4 8.00008ZM4 16.0001C4 15.2637 4.59695 14.6667 5.33333 14.6667H26.6667C27.403 14.6667 28 15.2637 28 16.0001C28 16.7365 27.403 17.3334 26.6667 17.3334H5.33333C4.59695 17.3334 4 16.7365 4 16.0001ZM4 24.0001C4 23.2637 4.59695 22.6667 5.33333 22.6667H26.6667C27.403 22.6667 28 23.2637 28 24.0001C28 24.7365 27.403 25.3334 26.6667 25.3334H5.33333C4.59695 25.3334 4 24.7365 4 24.0001Z"
        fill={color}
      />
    </Svg>
  );
}
