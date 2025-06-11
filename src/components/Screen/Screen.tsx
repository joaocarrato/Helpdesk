import React from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';

import {useAppSafeArea, useAppTheme} from '@hooks';

import {Box, BoxProps} from '../Box/Box';

import {ScrollViewContainer, ViewContainer} from './components/ScreenContainer';
import {ScreenHeader} from './components/ScreenHeader';

export type ScreenProps = {
  children: React.ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
} & BoxProps;

export function Screen({
  children,
  scrollable,
  canGoBack,
  style,
  ...screenProps
}: ScreenProps) {
  const {top, bottom} = useAppSafeArea();
  const {colors} = useAppTheme();

  const Container = scrollable ? ScrollViewContainer : ViewContainer;
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container backgroundColor={colors.backgroundColor}>
        <Box
          {...screenProps}
          paddingHorizontal="s24"
          style={[{paddingTop: top, paddingBottom: bottom}, style]}>
          <ScreenHeader canGoBack={canGoBack} />
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}
