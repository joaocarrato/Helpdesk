import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {Icon, ScreenProps, Text, TouchableOpacityBox} from '@components';

type Props = Pick<ScreenProps, 'canGoBack'>;

export function ScreenHeader({canGoBack}: Props) {
  const navigation = useNavigation();
  return (
    <>
      {canGoBack && (
        <TouchableOpacityBox
          flexDirection="row"
          alignItems="center"
          mb="s8"
          onPress={navigation.goBack}>
          <Icon name="arrowLeft" size={22} color="gray300" />
          <Text ml="s8" variant="headingMd" bold color="textSecondary">
            Voltar
          </Text>
        </TouchableOpacityBox>
      )}
    </>
  );
}
