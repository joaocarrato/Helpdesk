import React from 'react';

import {Container, Text} from '@components';
import {AppDrawerScreenProps} from '@routes';

export function TechnicianScreen({}: AppDrawerScreenProps<'TechnicianScreen'>) {
  return (
    <Container overrideColor>
      <Text>TechnicianScreen</Text>
    </Container>
  );
}
