import React from 'react';

import {Container, Text} from '@components';
import {AppStackScreenProps} from '@routes';

export function CreateNewServiceScreen({}: AppStackScreenProps<'CreateNewServiceScreen'>) {
  return (
    <Container>
      <Text>CreateNewServiceScreen</Text>
    </Container>
  );
}
