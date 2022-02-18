import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';

interface TypeProps {
  type: 'positive' | 'negative';
}

export const Container = styled.View`
  margin-bottom: 16px;
  padding: 18px 24px;

  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.shape};
`;

export const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;

export const Amount = styled.Text<TypeProps>`
  margin-top: 2px;

  color: ${(props) =>
    props.type === 'positive'
      ? props.theme.colors.success
      : props.theme.colors.attention};

  font-family: ${(props) => props.theme.fonts.regular};
  font-size: ${RFValue(20)}px;
`;

export const Footer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 20px;
`;

export const Category = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(Feather)`
  margin-right: 18px;

  color: ${(props) => props.theme.colors.text};
  font-size: ${RFValue(20)}px;
`;

export const Name = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${RFValue(14)}px;
`;

export const Date = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${RFValue(14)}px;
`;
