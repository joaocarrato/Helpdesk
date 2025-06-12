import React from 'react';

import {Container, Text} from '@components';
import {AppDrawerScreenProps} from '@routes';

export function ServicesScreen({}: AppDrawerScreenProps<'ServicesScreen'>) {
  return (
    <Container overrideColor>
      <Text>ServicesScreen</Text>
    </Container>
  );
}
