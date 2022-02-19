import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.TextInput`
  margin-bottom: 8px;
  padding: 16px 18px;

  width: 100%;

  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.shape};
  color: ${(props) => props.theme.colors.text_dark};
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;
