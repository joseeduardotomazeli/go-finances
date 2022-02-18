import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';

interface TypeProps {
  type: 'up' | 'down' | 'total';
}

export const Container = styled.View<TypeProps>`
  margin-right: 16px;
  padding: 20px 24px;
  padding-bottom: ${RFValue(42)}px;

  width: ${RFValue(300)}px;

  border-radius: 5px;
  background-color: ${(props) =>
    props.type === 'total'
      ? props.theme.colors.secondary
      : props.theme.colors.shape};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text<TypeProps>`
  color: ${(props) =>
    props.type === 'total'
      ? props.theme.colors.shape
      : props.theme.colors.text_dark};

  font-family: ${(props) => props.theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;

export const Icon = styled(Feather)<TypeProps>`
  ${(props) =>
    props.type === 'up' &&
    css`
      color: ${(props) => props.theme.colors.success};
    `};

  ${(props) =>
    props.type === 'down' &&
    css`
      color: ${(props) => props.theme.colors.attention};
    `};

  ${(props) =>
    props.type === 'total' &&
    css`
      color: ${(props) => props.theme.colors.shape};
    `};

  font-size: ${RFValue(40)}px;
`;

export const Footer = styled.View``;

export const Amount = styled.Text<TypeProps>`
  margin-top: 38px;

  color: ${(props) =>
    props.type === 'total'
      ? props.theme.colors.shape
      : props.theme.colors.text_dark};

  font-family: ${(props) => props.theme.fonts.medium};
  font-size: ${RFValue(32)}px;
`;

export const LastTransaction = styled.Text<TypeProps>`
  color: ${(props) =>
    props.type === 'total'
      ? props.theme.colors.shape
      : props.theme.colors.text};

  font-family: ${(props) => props.theme.fonts.regular};
  font-size: ${RFValue(12)}px;
`;
