import {DrawerScreenProps} from '@react-navigation/drawer';
import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {AppDrawerParamList} from './AppDrawer';
import {AppStackParamList} from './AppStack';
import {AuthStackParamList} from './AuthStack';

declare global {
  namespace ReactNavigation {
    interface RootParamList
      extends AuthStackParamList,
        AppStackParamList,
        AppDrawerParamList {}
  }
}

export type AuthStackScreenProps<RouteName extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, RouteName>;

export type AppStackScreenProps<RouteName extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, RouteName>;

export type AppDrawerScreenProps<RouteName extends keyof AppDrawerParamList> =
  CompositeScreenProps<
    DrawerScreenProps<AppDrawerParamList, RouteName>,
    NativeStackScreenProps<AppStackParamList, 'AppDrawer'>
  >;
