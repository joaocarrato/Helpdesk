import React from 'react';
import {StyleProp, TextStyle, ViewStyle} from 'react-native';

import {Dropdown as RNDropdown} from 'react-native-element-dropdown';

import {useAppTheme} from '@hooks';
import {palette, Theme} from '@theme';

import {Box, BoxProps} from '../Box/Box';
import {Text} from '../Text/Text';

export interface DropdownProps<T> {
  data: T[];
  labelField: string | number | symbol;
  valueField: string | number | symbol;
  onChange: (item: T) => void;
  placeholder: string;
  boxProps?: BoxProps;
  label: string;
}

export function Dropdown<TData>({
  data,
  labelField,
  valueField,
  onChange,
  boxProps,
  label,
  placeholder,
}: DropdownProps<TData>) {
  const {textVariants} = useAppTheme();

  const $textStyle = getTextStyle(textVariants);

  return (
    <Box {...boxProps}>
      <Text variant="textXs" color="textSecondary" bold mb="s4">
        {label.toUpperCase()}
      </Text>
      <RNDropdown
        data={data}
        labelField={labelField}
        valueField={valueField}
        onChange={onChange}
        placeholder={placeholder}
        style={$dropdownStyle}
        containerStyle={$containerStyle}
        placeholderStyle={{
          color: palette.gray400,
          fontWeight: '500',
          ...textVariants.headingMd,
        }}
        flatListProps={{
          scrollEnabled: false,
        }}
        itemTextStyle={$textStyle}
        selectedTextStyle={$textStyle}
      />
    </Box>
  );
}

function getTextStyle(
  textVariants: Theme['textVariants'],
): StyleProp<TextStyle> {
  return {
    fontWeight: '500',
    ...textVariants.textSm,
  };
}

const $dropdownStyle: StyleProp<ViewStyle> = {
  borderRadius: 10,
  borderWidth: 0.5,
  borderColor: palette.gray400,
  padding: 12,
};

const $containerStyle: StyleProp<ViewStyle> = {
  borderRadius: 10,
  backgroundColor: palette.gray600,
};
