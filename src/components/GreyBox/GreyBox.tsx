import React from 'react';

import {Box, BoxProps} from '../Box/Box';

type GreyBoxProps = {
  children: React.ReactNode;
} & BoxProps;

export function GreyBox({children, ...boxProps}: GreyBoxProps) {
  return (
    <Box
      padding="s24"
      borderWidth={1}
      borderColor="secondary"
      borderRadius="s10"
      {...boxProps}>
      {children}
    </Box>
  );
}
