import React from 'react';

import {LogoIconDark} from '@brand';

import {Box, Text} from '@components';

export function AuthHeader() {
  return (
    <Box
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      mb="s24">
      <LogoIconDark size={40} />
      <Text ml="s12" variant="textXl" color="primary">
        HelpDesk
      </Text>
    </Box>
  );
}
