import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(RectButton).attrs({
  activeOpacity: 0.7,
})`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 18px 16px;

  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.shape};
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.colors.text_dark};
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;

export const Icon = styled(Feather)`
  margin-right: 12px;

  color: ${(props) => props.theme.colors.text};
  font-size: ${RFValue(20)}px;
`;
