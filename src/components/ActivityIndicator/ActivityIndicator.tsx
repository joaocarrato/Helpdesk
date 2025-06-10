import React from 'react';
import {
  ActivityIndicator as RNActivityIndicator,
  ActivityIndicatorProps as RNActivityIndicatorProps,
} from 'react-native';

import {useAppTheme} from '@hooks';
import {ThemeColors} from '@theme';

type Props = {
  color?: ThemeColors;
} & RNActivityIndicatorProps;

export function ActivityIndicator({
  color = 'buttonPrimaryContrast',
  ...props
}: Props) {
  const {colors} = useAppTheme();
  return <RNActivityIndicator color={colors[color]} {...props} />;
}
