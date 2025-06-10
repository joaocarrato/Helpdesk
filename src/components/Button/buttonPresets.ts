import {ThemeColors} from '@theme';

import {TouchableOpacityBoxProps} from '../Box/Box';

import {ButtonPresets} from './Button';

export type ButtonUI = {
  container: TouchableOpacityBoxProps;
  content: ThemeColors;
};

export const buttonPresets: Record<
  ButtonPresets,
  {
    enabled: ButtonUI;
    disabled: ButtonUI;
  }
> = {
  primary: {
    enabled: {
      container: {
        backgroundColor: 'buttonPrimary',
      },
      content: 'buttonPrimaryContrast',
    },
    disabled: {
      container: {
        backgroundColor: 'gray400',
      },
      content: 'gray100',
    },
  },
  secondary: {
    enabled: {
      container: {
        backgroundColor: 'secondary',
      },
      content: 'secondaryContrast',
    },
    disabled: {
      container: {
        backgroundColor: 'gray400',
      },
      content: 'gray100',
    },
  },
};
