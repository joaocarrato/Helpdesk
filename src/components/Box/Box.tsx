import {
  ScrollView,
  ScrollViewProps,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

import {
  backgroundColor,
  BackgroundColorProps,
  backgroundColorShorthand,
  BackgroundColorShorthandProps,
  border,
  BorderProps,
  createBox,
  createRestyleComponent,
  layout,
  LayoutProps,
  spacing,
  SpacingProps,
  spacingShorthand,
  SpacingShorthandProps,
} from '@shopify/restyle';

import {Theme} from '@theme';

export const Box = createBox<Theme>();
export type BoxProps = React.ComponentProps<typeof Box>;

type RestyleTypes = BackgroundColorProps<Theme> &
  BackgroundColorShorthandProps<Theme> &
  SpacingProps<Theme> &
  SpacingShorthandProps<Theme> &
  LayoutProps<Theme> &
  BorderProps<Theme>;

export type TouchableOpacityBoxProps = RestyleTypes & TouchableOpacityProps;
export const TouchableOpacityBox = createRestyleComponent<
  TouchableOpacityBoxProps,
  Theme
>(
  [
    backgroundColor,
    backgroundColorShorthand,
    spacing,
    spacingShorthand,
    layout,
    border,
  ],
  TouchableOpacity,
);

export type ScrollViewBoxProps = ScrollViewProps & RestyleTypes;
export const ScrollViewBox = createRestyleComponent<ScrollViewBoxProps, Theme>(
  [
    backgroundColor,
    backgroundColorShorthand,
    spacing,
    spacingShorthand,
    layout,
    border,
  ],
  ScrollView,
);
