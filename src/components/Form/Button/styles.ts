import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity`
  align-items: center;

  padding: 18px;

  width: 100%;

  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.secondary};
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.colors.shape};
  font-family: ${(props) => props.theme.fonts.medium};
  font-size: ${RFValue(14)}px;
`;
