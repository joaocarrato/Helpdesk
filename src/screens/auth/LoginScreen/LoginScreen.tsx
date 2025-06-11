import React from 'react';

import {LogoIconDark} from '@brand';

import {Box, Button, GreyBox, Text, TextInput, Container} from '@components';

export function LoginScreen() {
  return (
    <Container>
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        mb="s24">
        <LogoIconDark size={40} />
        <Text ml="s12" variant="textXl" color="primary">
          HelpDesk
        </Text>
      </Box>

      <GreyBox mb="s12">
        <Text variant="textLg">Acesse o portal</Text>
        <Text variant="textSm" color="textSecondary" mb="s32">
          Entre usando seu e-mail e senha cadastrados
        </Text>

        <TextInput
          label="E-MAIL"
          placeholder="exemplo@mail.com"
          boxProps={{mb: 's16'}}
        />

        <TextInput
          label="SENHA"
          placeholder="Digite sua senha"
          secureTextEntry
          boxProps={{mb: 's32'}}
        />

        <Button title="Entrar" />
      </GreyBox>

      <GreyBox>
        <Text variant="headingMd" bold>
          Ainda não tem uma conta?
        </Text>
        <Text variant="textSm" color="textSecondary" mb="s20">
          Cadastre agora mesmo
        </Text>

        <Button title="Criar conta" preset="secondary" />
      </GreyBox>
    </Container>
  );
}
