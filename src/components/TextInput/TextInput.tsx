import React, {useRef, useState} from 'react';
import {
  TextInputProps as RNTextInputProps,
  TextInput as RNTextInput,
  StyleProp,
  TextStyle,
  Pressable,
} from 'react-native';

import {useAppTheme} from '@hooks';
import {Theme} from '@theme';

import {Box, BoxProps} from '../Box/Box';
import {Icon} from '../Icon/Icon';
import {Text} from '../Text/Text';

type TextInputProps = {
  label: string;
  helperText?: string;
  errorMessage?: string;
  boxProps?: BoxProps;
} & RNTextInputProps;

export function TextInput({
  label,
  errorMessage,
  helperText,
  boxProps,
  ...textInputProps
}: TextInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const {colors, textVariants} = useAppTheme();

  const $textInputStyle = getTextInputStyle(textVariants);
  const $textInputContainerStyle = getTextInputContainerStyle(
    isFocused,
    errorMessage,
  );
  const inputRef = useRef<RNTextInput>(null);

  function handleFocus() {
    inputRef.current?.focus();
  }

  return (
    <Box {...boxProps}>
      <Pressable onPress={handleFocus}>
        <Text
          variant="textXs"
          color={
            errorMessage
              ? 'feedbackDanger'
              : isFocused
              ? 'blueBase'
              : 'textSecondary'
          }
          bold
          mb="s4">
          {label.toUpperCase()}
        </Text>
        <Box {...$textInputContainerStyle}>
          <RNTextInput
            {...textInputProps}
            ref={inputRef}
            placeholderTextColor={colors.inputText}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            selectionColor={colors.blueBase}
            style={$textInputStyle}
          />
        </Box>
        {helperText && !errorMessage && (
          <Text
            variant="textSm"
            color="inputText"
            mt="s8"
            style={{fontStyle: 'italic'}}>
            {helperText}
          </Text>
        )}
        {errorMessage && (
          <Box flexDirection="row" alignItems="center" mt="s8">
            <Icon name="circleAlert" color="feedbackDanger" size={18} />
            <Text variant="textSm" color="feedbackDanger" ml="s4">
              {errorMessage}
            </Text>
          </Box>
        )}
      </Pressable>
    </Box>
  );
}

/**
 * Returns the style props for the TextInput container based on focus and error state.
 *
 * @param isFocused - Indicates if the TextInput is currently focused.
 * @param errorMessage - Optional error message. If present, the border color will indicate an error state.
 * @returns BoxProps object containing style properties for the TextInput container.
 *
 * The border color is determined by the following priority:
 * - If `errorMessage` is present, uses 'feedbackDanger'.
 * - If the input is focused, uses 'blueBase'.
 * - Otherwise, uses 'secondary'.
 */

function getTextInputContainerStyle(
  isFocused: boolean,
  errorMessage?: string,
): BoxProps {
  return {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingVertical: 's8',
    borderColor: errorMessage
      ? 'feedbackDanger'
      : isFocused
      ? 'blueBase'
      : 'secondary',
  };
}

function getTextInputStyle(
  textVariants: Theme['textVariants'],
): StyleProp<TextStyle> {
  return {
    flexShrink: 1,
    flexGrow: 1,
    includeFontPadding: false,
    fontWeight: '500',
    ...textVariants.headingMd,
  };
}
