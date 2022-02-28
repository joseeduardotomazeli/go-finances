import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

interface ContainerProps {
  color: string;
}

export const Container = styled.View<ContainerProps>`
  flex-direction: row;
  justify-content: space-between;

  margin-bottom: 8px;
  padding: 14px 24px;

  width: 100%;

  border-radius: 5px;
  border-left-width: 5px;
  border-style: solid;
  border-left-color: ${(props) => props.color};
  background-color: ${(props) => props.theme.colors.shape};
`;

export const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: ${RFValue(15)}px;
`;

export const Amount = styled.Text`
  font-family: ${(props) => props.theme.fonts.bold};
  font-size: ${RFValue(15)}px;
`;
