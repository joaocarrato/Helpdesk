import React from 'react';

import {LogoIconLight} from '@brand';
import {useDrawerStatus} from '@react-navigation/drawer';
import {DrawerActions, useNavigation} from '@react-navigation/native';

import {
  Box,
  BoxProps,
  Icon,
  Text,
  TouchableOpacityBox,
  TouchableOpacityBoxProps,
} from '@components';
import {useAppSafeArea} from '@hooks';

export function DrawerHeader() {
  const {top} = useAppSafeArea();
  const navigation = useNavigation();
  const isDrawerOpen = useDrawerStatus() === 'open';
  return (
    <Box style={{paddingTop: top}} {...$headerStyle}>
      <LogoDrawerHeader
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        isDrawerOpen={isDrawerOpen}
      />
      <Box
        height={40}
        width={40}
        borderRadius="s35"
        justifyContent="center"
        alignItems="center"
        backgroundColor="blueBase"
      />
    </Box>
  );
}

type HeaderProps = {
  onPress: () => void;
  isDrawerOpen?: boolean;
};

function LogoDrawerHeader({onPress, isDrawerOpen}: HeaderProps) {
  return (
    <Box flexDirection="row" alignItems="center">
      <DrawerMenu onPress={onPress} isDrawerOpen={isDrawerOpen} />
      <Box ml="s16" flexDirection="row" alignItems="center">
        <LogoIconLight size={44} />
        <Box ml="s12">
          <Text variant="textLg" color="primaryContrast">
            HelpDesk
          </Text>
          <Text color="blueLight" variant="textXs" bold>
            ADMIN
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

function DrawerMenu({onPress, isDrawerOpen}: HeaderProps) {
  return (
    <TouchableOpacityBox {...$drawerMenuStyle} onPress={onPress}>
      <Icon name={isDrawerOpen ? 'close' : 'menu'} color="gray600" size={20} />
    </TouchableOpacityBox>
  );
}

const $drawerMenuStyle: TouchableOpacityBoxProps = {
  height: 40,
  width: 40,
  borderRadius: 's5',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'gray200',
};

const $headerStyle: BoxProps = {
  padding: 's24',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: 'gray100',
};
