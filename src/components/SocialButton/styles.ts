import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(RectButton)`
  flex-direction: row;
  align-items: center;

  margin-bottom: 16px;

  height: ${RFValue(56)}px;

  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.shape};
`;

export const Wrapper = styled.View`
  align-items: center;
  justify-content: center;

  padding: ${RFValue(16)}px;

  height: 100%;

  border-right-width: 1px;
  border-color: ${(props) => props.theme.colors.background};
`;

export const Title = styled.Text`
  flex: 1;

  font-family: ${(props) => props.theme.fonts.medium};
  font-size: ${RFValue(14)}px;
  text-align: center;
`;
