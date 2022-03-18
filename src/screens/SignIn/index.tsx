import React, { useState } from 'react';
import { ActivityIndicator, Platform, Alert } from 'react-native';
import { useTheme } from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';

import SocialButton from '../../components/SocialButton';

import useAuth from '../../hooks/useAuth';

import Logo from '../../assets/logo.svg';
import GoogleIcon from '../../assets/google.svg';
import AppleIcon from '../../assets/apple.svg';

import {
  Container,
  Header,
  HeaderWrapper,
  Title,
  SignInTitle,
  Footer,
  FooterWrapper,
} from './styles';

function SignIn() {
  const { signInWithGoogle, signInWithApple } = useAuth();
  const theme = useTheme();

  const [isLoading, setIsLoading] = useState(false);

  async function handleSignInWithGoogle() {
    try {
      setIsLoading(true);
      return await signInWithGoogle();
    } catch {
      setIsLoading(false);
      Alert.alert('Não foi possível conectar com a conta Google.');
    }
  }

  async function handleSignInWithApple() {
    try {
      setIsLoading(true);
      return await signInWithApple();
    } catch {
      setIsLoading(false);
      Alert.alert('Não foi possível conectar com a conta Apple.');
    }
  }

  return (
    <Container>
      <Header>
        <HeaderWrapper>
          <Logo width={RFValue(120)} height={RFValue(68)} />

          <Title>
            Controle suas {'\n'} finanças de uma forma {'\n'} muito simples
          </Title>
        </HeaderWrapper>

        <SignInTitle>
          Faça seu login com {'\n'} uma das contas abaixo
        </SignInTitle>
      </Header>

      <Footer>
        <FooterWrapper>
          <SocialButton
            svg={GoogleIcon}
            title="Entrar com Google"
            onPress={handleSignInWithGoogle}
          />

          {Platform.OS === 'ios' && (
            <SocialButton
              svg={AppleIcon}
              title="Entrar com Apple"
              onPress={handleSignInWithApple}
            />
          )}
        </FooterWrapper>

        {isLoading && (
          <ActivityIndicator
            color={theme.colors.shape}
            style={{ marginTop: 18 }}
          />
        )}
      </Footer>
    </Container>
  );
}

export default SignIn;
