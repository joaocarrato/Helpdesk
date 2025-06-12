import React from 'react';

import {
  createDrawerNavigator,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';

import {Icon, IconProps} from '@components';
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

  function drawerIcon({
    focused,
    iconName,
  }: {
    focused: boolean;
    iconName: IconProps['name'];
  }) {
    return (
      <Icon name={iconName} size={20} color={focused ? 'gray600' : 'gray400'} />
    );
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
          drawerIcon: ({focused}) =>
            drawerIcon({focused: focused, iconName: 'clipboard'}),
        }}
      />
      <Drawer.Screen
        name="TechnicianScreen"
        component={TechnicianScreen}
        options={{
          drawerLabel: 'Técnicos',
          drawerIcon: ({focused}) =>
            drawerIcon({focused: focused, iconName: 'users'}),
        }}
      />
      <Drawer.Screen
        name="CustomersScreen"
        component={CustomersScreen}
        options={{
          drawerLabel: 'Clientes',
          drawerIcon: ({focused}) =>
            drawerIcon({focused: focused, iconName: 'briefcase'}),
        }}
      />
      <Drawer.Screen
        name="ServicesScreen"
        component={ServicesScreen}
        options={{
          drawerLabel: 'Serviços',
          drawerIcon: ({focused}) =>
            drawerIcon({focused: focused, iconName: 'wrench'}),
        }}
      />
    </Drawer.Navigator>
  );
}
