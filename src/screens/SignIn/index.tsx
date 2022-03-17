import React from 'react';
import { Alert } from 'react-native';
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
  const { signInWithGoogle } = useAuth();

  async function handleSignInWithGoogle() {
    try {
      await signInWithGoogle();
    } catch {
      Alert.alert('Não foi possível conectar com a conta Google.');
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

          <SocialButton svg={AppleIcon} title="Entrar com Apple" />
        </FooterWrapper>
      </Footer>
    </Container>
  );
}

export default SignIn;
