import React from 'react';

import {TouchableOpacityBox, TouchableOpacityBoxProps} from '../Box/Box';

import {ButtonContent} from './ButtonContent';
import {buttonPresets} from './buttonPresets';

export type ButtonPresets = 'primary' | 'secondary';

export type ButtonProps = {
  title?: string;
  leftComponent?: React.ReactElement;
  disabled?: boolean;
  loading?: boolean;
  preset?: ButtonPresets;
} & TouchableOpacityBoxProps;

export function Button({
  title,
  disabled,
  preset = 'primary',
  loading,
  leftComponent,
  ...buttonProps
}: ButtonProps) {
  const $buttonPreset = getButtonStyle(preset, disabled);
  return (
    <TouchableOpacityBox
      disabled={disabled || loading}
      {...$buttonPreset}
      {...buttonProps}>
      <ButtonContent
        loading={loading}
        leftComponent={leftComponent}
        title={title}
        preset={preset}
        disabled={disabled}
      />
    </TouchableOpacityBox>
  );
}

/**
 * Returns the style props for a button based on the given preset and disabled state.
 *
 * @param preset - The visual style preset for the button ('primary' or 'secondary').
 * @param disabled - Optional boolean indicating if the button is disabled.
 * @returns The style properties to be applied to the TouchableOpacityBox component.
 */
function getButtonStyle(
  preset: ButtonPresets,
  disabled?: boolean,
): TouchableOpacityBoxProps {
  const buttonPreset = buttonPresets[preset][disabled ? 'disabled' : 'enabled'];
  return {
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 's12',
    paddingHorizontal: 's16',
    borderRadius: 's5',
    ...buttonPreset.container,
  };
}
