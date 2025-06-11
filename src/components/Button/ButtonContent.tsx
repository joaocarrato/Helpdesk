import React from 'react';

import {ActivityIndicator} from '../ActivityIndicator/ActivityIndicator';
import {Box} from '../Box/Box';
import {Text} from '../Text/Text';

import {ButtonProps} from './Button';
import {buttonPresets} from './buttonPresets';

export function ButtonContent({
  loading,
  leftComponent,
  title,
  preset = 'primary',
  disabled,
}: Pick<
  ButtonProps,
  'loading' | 'leftComponent' | 'title' | 'preset' | 'disabled'
>) {
  const $textStyle = buttonPresets[preset][disabled ? 'disabled' : 'enabled'];
  return (
    <>
      {loading ? (
        <ActivityIndicator color={$textStyle.content} />
      ) : (
        <>
          {leftComponent && <Box mr="s8">{leftComponent}</Box>}
          {title && (
            <Text variant="textSm" color={$textStyle.content} bold>
              {title}
            </Text>
          )}
        </>
      )}
    </>
  );
}
