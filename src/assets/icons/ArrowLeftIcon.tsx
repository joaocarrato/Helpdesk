import React from 'react';

import Svg, {Path} from 'react-native-svg';

import {BaseIconProps} from '@components';

export function ArrowLeftIcon({size = 32, color = 'black'}: BaseIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.9428 5.72378C17.4635 6.24448 17.4635 7.0887 16.9428 7.60939L9.8856 14.6666H25.3333C26.0697 14.6666 26.6666 15.2635 26.6666 15.9999C26.6666 16.7363 26.0697 17.3333 25.3333 17.3333H9.8856L16.9428 24.3904C17.4635 24.9111 17.4635 25.7554 16.9428 26.2761C16.4221 26.7968 15.5779 26.7968 15.0572 26.2761L5.72384 16.9427C5.20314 16.422 5.20314 15.5778 5.72384 15.0571L15.0572 5.72378C15.5779 5.20308 16.4221 5.20308 16.9428 5.72378Z"
        fill={color}
      />
    </Svg>
  );
}
