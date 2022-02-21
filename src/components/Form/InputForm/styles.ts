import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: 100%;
`;

export const Error = styled.Text`
  margin-bottom: 6px;

  color: ${(props) => props.theme.colors.attention};
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: ${RFValue(12)}px;
`;
