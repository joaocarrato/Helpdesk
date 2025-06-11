import React from 'react';
import {Dimensions, ImageBackground, StyleProp, ViewStyle} from 'react-native';

import {imageUtils} from '@utils';

import {Screen, ScrollViewBox, ScrollViewBoxProps} from '@components';
import {useAppSafeArea} from '@hooks';

import {ScreenHeader} from '../Screen/components/ScreenHeader';

const {height: MAX_HEIGHT, width: MAX_WIDTH} = Dimensions.get('screen');

type Props = {
  children: React.ReactNode;
  scrollable?: boolean;
  canGoBack?: boolean;
};

export function Container({children, canGoBack, scrollable = false}: Props) {
  const {top} = useAppSafeArea();
  return (
    <Screen>
      <ImageBackground
        source={imageUtils.imageBackground}
        style={[$imageStyle, {paddingTop: top}]}>
        <ScrollViewBox {...$containerStyle} scrollEnabled={scrollable}>
          <ScreenHeader canGoBack={canGoBack} />
          {children}
        </ScrollViewBox>
      </ImageBackground>
    </Screen>
  );
}

const $imageStyle: StyleProp<ViewStyle> = {
  height: MAX_HEIGHT,
  width: MAX_WIDTH,
  position: 'absolute',
};

const $containerStyle: ScrollViewBoxProps = {
  flex: 1,
  paddingHorizontal: 's24',
  paddingTop: 's32',
  backgroundColor: 'backgroundColor',
  borderTopRightRadius: 's35',
  borderTopLeftRadius: 's35',
};
