import './gesture-handler';
if (__DEV__) {
  require('./ReactotronConfig');
}
import React from 'react';
import {SafeAreaView} from 'react-native';

import {ThemeProvider} from '@shopify/restyle';

import {Text} from '@components';
import {theme} from '@theme';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Text variant="headingMd">
          Whereas disregard and contempt for human rights have resulted
        </Text>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
