import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';

import SocialButton from '../../components/SocialButton';

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
          <SocialButton svg={GoogleIcon} title="Entrar com Google" />
          <SocialButton svg={AppleIcon} title="Entrar com Apple" />
        </FooterWrapper>
      </Footer>
    </Container>
  );
}

export default SignIn;
