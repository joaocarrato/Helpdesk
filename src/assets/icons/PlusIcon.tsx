import React from 'react';

import Svg, {Path} from 'react-native-svg';

import {BaseIconProps} from '@components';

export function PlusIcon({size = 32, color = 'black'}: BaseIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 5.33325C16.7364 5.33325 17.3334 5.93021 17.3334 6.66659V14.6666H25.3334C26.0698 14.6666 26.6667 15.2635 26.6667 15.9999C26.6667 16.7363 26.0698 17.3333 25.3334 17.3333H17.3334V25.3333C17.3334 26.0696 16.7364 26.6666 16 26.6666C15.2637 26.6666 14.6667 26.0696 14.6667 25.3333V17.3333H6.66671C5.93033 17.3333 5.33337 16.7363 5.33337 15.9999C5.33337 15.2635 5.93033 14.6666 6.66671 14.6666H14.6667V6.66659C14.6667 5.93021 15.2637 5.33325 16 5.33325Z"
        fill={color}
      />
    </Svg>
  );
}
