import React from 'react';
import {Dimensions, ImageBackground} from 'react-native';

import {Box, Screen} from '@components';
import {useAppSafeArea} from '@hooks';

const {height: MAX_HEIGHT, width: MAX_WIDTH} = Dimensions.get('screen');

type Props = {
  children: React.ReactNode;
};

export function Container({children}: Props) {
  const {top} = useAppSafeArea();
  return (
    <Screen>
      <ImageBackground
        source={require('../../../assets/images/backgroundImage.png')}
        style={{
          height: MAX_HEIGHT,
          width: MAX_WIDTH,
          position: 'absolute',
          paddingTop: top,
        }}>
        <Box
          flex={1}
          paddingHorizontal="s24"
          backgroundColor="backgroundColor"
          borderTopRightRadius="s35"
          borderTopLeftRadius="s35"
          style={{paddingTop: top}}>
          {children}
        </Box>
      </ImageBackground>
    </Screen>
  );
}
