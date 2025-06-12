import React from 'react';

import {Container, Text} from '@components';
import {AppStackScreenProps} from '@routes';

export function TicketDetailsScreen({}: AppStackScreenProps<'TicketDetailsScreen'>) {
  return (
    <Container>
      <Text>TicketDetailsScreen</Text>
    </Container>
  );
}
