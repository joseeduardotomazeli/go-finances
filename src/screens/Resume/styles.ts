import styled from 'styled-components/native';
import { ActivityIndicator } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
`;

export const LoadingContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Loading = styled(ActivityIndicator).attrs((props) => ({
  color: props.theme.colors.secondary,
  size: 'large',
}))``;

export const Header = styled.View`
  align-items: center;
  justify-content: flex-end;

  padding-bottom: 20px;

  width: 100%;
  height: ${RFValue(114)}px;

  background-color: ${(props) => props.theme.colors.primary};
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.colors.shape};
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: ${RFValue(18)}px;
`;

export const HistoryCards = styled.ScrollView``;

export const ChartContainer = styled.View`
  align-items: center;
  width: 100%;
`;

export const MonthSelect = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 24px;

  width: 100%;
`;

export const Button = styled(BorderlessButton)``;

export const Icon = styled(Feather)`
  font-size: ${RFValue(24)}px;
`;

export const Month = styled.Text`
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: ${RFValue(20)}px;
`;
