import React from 'react';

import {
  createDrawerNavigator,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';

import {Icon} from '@components';
import {useAppTheme} from '@hooks';
import {
  CustomersScreen,
  ServicesScreen,
  TechnicianScreen,
  TicketScreen,
} from '@screens';

import {CustomDrawerContent} from './CustomDrawerContent';
import {DrawerHeader} from './DrawerHeader';

export type AppDrawerParamList = {
  TicketScreen: undefined;
  TechnicianScreen: undefined;
  CustomersScreen: undefined;
  ServicesScreen: undefined;
};

const Drawer = createDrawerNavigator<AppDrawerParamList>();

export function AppDrawer() {
  const {colors, textVariants} = useAppTheme();

  function drawerContent(props: DrawerContentComponentProps) {
    return <CustomDrawerContent {...props} />;
  }

  function drawerHeader() {
    return <DrawerHeader />;
  }

  return (
    <Drawer.Navigator
      initialRouteName="TicketScreen"
      screenOptions={{
        header: () => drawerHeader(),
        drawerActiveBackgroundColor: colors.primary,
        drawerActiveTintColor: colors.gray600,
        drawerInactiveTintColor: colors.gray400,
        drawerStyle: {
          backgroundColor: colors.gray100,
          paddingHorizontal: 20,
          width: 300,
        },
        drawerLabelStyle: {
          ...textVariants.headingMd,
        },
        drawerItemStyle: {
          borderRadius: 5,
        },
        drawerType: 'front',
      }}
      drawerContent={drawerContent}>
      <Drawer.Screen
        name="TicketScreen"
        component={TicketScreen}
        options={{
          drawerLabel: 'Chamados',
          drawerIcon: ({focused}) => (
            <Icon
              name="clipboard"
              size={20}
              color={focused ? 'gray600' : 'gray400'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="TechnicianScreen"
        component={TechnicianScreen}
        options={{
          drawerLabel: 'Técnicos',
          drawerIcon: ({focused}) => (
            <Icon
              name="users"
              size={20}
              color={focused ? 'gray600' : 'gray400'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="CustomersScreen"
        component={CustomersScreen}
        options={{
          drawerLabel: 'Clientes',
          drawerIcon: ({focused}) => (
            <Icon
              name="briefcase"
              size={20}
              color={focused ? 'gray600' : 'gray400'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="ServicesScreen"
        component={ServicesScreen}
        options={{
          drawerLabel: 'Serviços',
          drawerIcon: ({focused}) => (
            <Icon
              name="wrench"
              size={20}
              color={focused ? 'gray600' : 'gray400'}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
