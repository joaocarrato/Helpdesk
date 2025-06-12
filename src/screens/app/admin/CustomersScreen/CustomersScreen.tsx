import React from 'react';

import {Container, Text} from '@components';
import {AppDrawerScreenProps} from '@routes';

export function CustomersScreen({}: AppDrawerScreenProps<'CustomersScreen'>) {
  return (
    <Container overrideColor>
      <Text>CustomersScreen</Text>
    </Container>
  );
}
