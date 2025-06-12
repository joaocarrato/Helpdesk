import React from 'react';

import {NavigatorScreenParams} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  CreateNewServiceScreen,
  CreateNewTechnicianScreen,
  TicketDetailsScreen,
} from '@screens';

import {AppDrawer, AppDrawerParamList} from './AppDrawer';

export type AppStackParamList = {
  AppDrawer: NavigatorScreenParams<AppDrawerParamList>;
  CreateNewServiceScreen: undefined;
  CreateNewTechnicianScreen: undefined;
  TicketDetailsScreen: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, fullScreenGestureEnabled: true}}>
      <Stack.Screen name="AppDrawer" component={AppDrawer} />
      <Stack.Screen
        name="CreateNewServiceScreen"
        component={CreateNewServiceScreen}
      />
      <Stack.Screen
        name="CreateNewTechnicianScreen"
        component={CreateNewTechnicianScreen}
      />
      <Stack.Screen
        name="TicketDetailsScreen"
        component={TicketDetailsScreen}
      />
    </Stack.Navigator>
  );
}
