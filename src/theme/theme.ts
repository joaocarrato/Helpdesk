import {createTheme} from '@shopify/restyle';

export const palette = {
  blueDark: '#2E3DA3',
  blueBase: '#5165E1',
  blueLight: '#8996EB',

  gray100: '#151619',
  gray200: '#1E2024',
  gray300: '#535964',
  gray400: '#858B99',
  gray500: '#E3E5E8',
  gray600: '#F9FAFA',

  feedbackDanger: '#D03E3E',
  feedbackOpen: '#CC3D6A',
  feedbackProgress: '#355EC5',
  feedbackDone: '#508B26',
};

export const theme = createTheme({
  colors: {
    ...palette,
    backgroundColor: palette.gray600,
    containerColor: palette.gray100,

    primary: palette.blueDark,
    primaryContrast: palette.gray600,

    buttonPrimary: palette.gray200,
    buttonPrimaryContrast: palette.gray600,

    secondary: palette.gray500,
    secondaryContrast: palette.gray200,

    textPrimary: palette.gray200,
    textSecondary: palette.gray300,

    inputText: palette.gray400,
  },
  spacing: {
    s4: 4,
    s8: 8,
    s10: 10,
    s12: 12,
    s14: 14,
    s16: 16,
    s20: 20,
    s24: 24,
    s32: 32,
    s40: 40,
    s48: 48,
    s56: 56,
  },
  borderRadii: {
    s8: 8,
    s12: 12,
    s16: 16,
  },
  textVariants: {
    defaults: {
      color: 'textPrimary',
      fontFamily: 'LatoRegular',
    },
    textXl: {
      fontSize: 24,
      lineHeight: 26,
      fontFamily: 'LatoBold',
    },
    textLg: {
      fontSize: 20,
      lineHeight: 22,
      fontFamily: 'LatoBold',
    },
    headingMd: {
      fontSize: 16,
      lineHeight: 18,
      fontFamily: 'LatoRegular',
    },
    textSm: {
      fontSize: 14,
      lineHeight: 16,
      fontFamily: 'LatoRegular',
    },
    textXs: {
      fontSize: 12,
      lineHeight: 14,
      fontFamily: 'LatoRegular',
    },
    textXxs: {
      fontSize: 10,
      lineHeight: 12,
      fontFamily: 'LatoBold',
    },
  },
});

export type Theme = typeof theme;
export type ThemeColors = keyof Theme['colors'];
