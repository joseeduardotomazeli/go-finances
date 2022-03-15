import styled from 'styled-components/native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
`;

export const Header = styled.View`
  align-items: center;
  justify-content: flex-end;

  width: 100%;
  height: 70%;

  background-color: ${(props) => props.theme.colors.primary};
`;

export const HeaderWrapper = styled.View`
  align-items: center;
`;

export const Title = styled.Text`
  margin-top: 45px;

  color: ${(props) => props.theme.colors.shape};
  font-family: ${(props) => props.theme.fonts.medium};
  font-size: ${RFValue(30)}px;
  text-align: center;
`;

export const SignInTitle = styled.Text`
  margin-top: 80px;
  margin-bottom: 66px;

  color: ${(props) => props.theme.colors.shape};
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: ${RFValue(16)}px;
  text-align: center;
`;

export const Footer = styled.View`
  width: 100%;
  height: 30%;

  background-color: ${(props) => props.theme.colors.secondary};
`;

export const FooterWrapper = styled.View`
  justify-content: space-between;
  margin-top: ${RFPercentage(-4)}px;
  padding: 0 32px;
`;
