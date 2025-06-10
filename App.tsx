import './gesture-handler';
if (__DEV__) {
  require('./ReactotronConfig');
}
import React from 'react';

import {ThemeProvider} from '@shopify/restyle';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Button, Icon, Screen, Text} from '@components';
import {theme} from '@theme';
function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Screen canGoBack>
          <Text variant="headingMd">
            Whereas disregard and contempt for human rights have resulted
          </Text>

          <Icon name="menu" size={24} />

          <Button title="Criar minha conta" />
        </Screen>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
