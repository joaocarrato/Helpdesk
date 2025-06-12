import React from 'react';

import {Container, Text} from '@components';
import {AppDrawerScreenProps} from '@routes';

export function TicketScreen({}: AppDrawerScreenProps<'TicketScreen'>) {
  return (
    <Container overrideColor>
      <Text variant="textLg" color="primary" mb="s16">
        Chamados
      </Text>
    </Container>
  );
}
