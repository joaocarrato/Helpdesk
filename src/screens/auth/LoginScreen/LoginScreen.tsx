import React from 'react';

import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';

import {Button, GreyBox, Text, Container, FormInput} from '@components';
import {AuthStackScreenProps} from '@routes';

import {AuthHeader} from '../components/AuthHeader';

import {LoginSchemaType, loginScreenSchema} from './loginScreenSchema';

export function LoginScreen({navigation}: AuthStackScreenProps<'LoginScreen'>) {
  const {control, handleSubmit, formState} = useForm<LoginSchemaType>({
    resolver: zodResolver(loginScreenSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function onSubmit(data: LoginSchemaType) {
    console.log(data);
  }

  function navigateToSignUpScreen() {
    navigation.navigate('SignUpScreen');
  }

  return (
    <Container>
      <AuthHeader />

      <GreyBox mb="s12">
        <Text variant="textLg">Acesse o portal</Text>
        <Text variant="textSm" color="textSecondary" mb="s32">
          Entre usando seu e-mail e senha cadastrados
        </Text>

        <FormInput
          control={control}
          name="email"
          label="e-mail"
          placeholder="exemplo@mail.com"
          boxProps={{mb: 's16'}}
        />

        <FormInput
          control={control}
          name="password"
          label="SENHA"
          placeholder="Digite sua senha"
          secureTextEntry
          boxProps={{mb: 's32'}}
        />

        <Button
          title="Entrar"
          disabled={!formState.isValid}
          loading={formState.isLoading}
          onPress={handleSubmit(onSubmit)}
        />
      </GreyBox>

      <GreyBox>
        <Text variant="headingMd" bold>
          Ainda não tem uma conta?
        </Text>
        <Text variant="textSm" color="textSecondary" mb="s20">
          Cadastre agora mesmo
        </Text>

        <Button
          title="Criar conta"
          preset="secondary"
          onPress={navigateToSignUpScreen}
        />
      </GreyBox>
    </Container>
  );
}
