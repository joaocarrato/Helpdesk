import React from 'react';

import {Box, Icon, ScreenProps, Text} from '@components';

type Props = Pick<ScreenProps, 'canGoBack'>;

export function ScreenHeader({canGoBack}: Props) {
  return (
    <>
      {canGoBack && (
        <Box flexDirection="row" alignItems="center" mb="s8">
          <Icon name="arrowLeft" size={22} color="gray300" />
          <Text ml="s8" variant="headingMd" bold color="textSecondary">
            Voltar
          </Text>
        </Box>
      )}
    </>
  );
}
