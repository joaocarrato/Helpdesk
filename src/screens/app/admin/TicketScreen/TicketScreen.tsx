import React from 'react';

import {Container, Text} from '@components';
import {AppDrawerScreenProps} from '@routes';

export function TicketScreen({}: AppDrawerScreenProps<'TicketScreen'>) {
  return (
    <Container overrideColor>
      <Text>TicketScreen</Text>
    </Container>
  );
}
