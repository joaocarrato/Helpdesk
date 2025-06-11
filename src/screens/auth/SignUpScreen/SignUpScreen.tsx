import React from 'react';

import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';

import {Button, Container, FormInput, GreyBox, Text} from '@components';
import {AuthStackScreenProps} from '@routes';

import {AuthHeader} from '../components/AuthHeader';

import {SignUpSchemaType, signUpScreenSchema} from './signUpScreenSchema';

export function SignUpScreen({
  navigation,
}: AuthStackScreenProps<'SignUpScreen'>) {
  const {control, handleSubmit, formState} = useForm<SignUpSchemaType>({
    resolver: zodResolver(signUpScreenSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function onSubmit(data: SignUpSchemaType) {
    console.log(data);
  }

  return (
    <Container>
      <AuthHeader />

      <GreyBox mb="s12">
        <Text variant="textLg">Crie sua conta</Text>
        <Text variant="textSm" color="textSecondary" mb="s32">
          Informe seu nome, e-mail e senha
        </Text>

        <FormInput
          control={control}
          name="name"
          label="nome"
          autoCapitalize="words"
          placeholder="Digite o nome completo"
          boxProps={{mb: 's16'}}
        />

        <FormInput
          control={control}
          name="email"
          label="e-mail"
          autoCapitalize="none"
          placeholder="exemplo@mail.com"
          boxProps={{mb: 's16'}}
        />

        <FormInput
          control={control}
          name="password"
          label="senha"
          placeholder="Digite sua senha"
          helperText="Mínimo de 6 dígitos"
          secureTextEntry
          boxProps={{mb: 's32'}}
        />

        <Button
          title="Cadastrar"
          disabled={!formState.isValid}
          loading={formState.isLoading}
          onPress={handleSubmit(onSubmit)}
        />
      </GreyBox>

      <GreyBox>
        <Text variant="headingMd" bold>
          Já tem uma conta?
        </Text>
        <Text variant="textSm" color="textSecondary" mb="s20">
          Entre agora mesmo
        </Text>

        <Button
          title="Acessar conta"
          preset="secondary"
          onPress={navigation.goBack}
        />
      </GreyBox>
    </Container>
  );
}
