import styled from 'styled-components/native';
import { ActivityIndicator, FlatList, FlatListProps } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';
import {
  getStatusBarHeight,
  getBottomSpace,
} from 'react-native-iphone-x-helper';

import { TransactionsListProps } from '.';

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
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;

  width: 100%;
  height: ${RFPercentage(42)}px;

  background-color: ${(props) => props.theme.colors.primary};
`;

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: ${getStatusBarHeight() + RFValue(28)}px;
  padding-left: 24px;
  padding-right: 24px;

  width: 100%;
`;

export const Info = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Photo = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;

  border-radius: 10px;
`;

export const User = styled.View`
  margin-left: 18px;
`;

export const Greeting = styled.Text`
  color: ${(props) => props.theme.colors.shape};
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: ${RFValue(18)}px;
`;

export const Name = styled.Text`
  color: ${(props) => props.theme.colors.shape};
  font-family: ${(props) => props.theme.fonts.bold};
  font-size: ${RFValue(18)}px;
`;

export const LogOutButton = styled(BorderlessButton)``;

export const Icon = styled(Feather)`
  color: ${(props) => props.theme.colors.secondary};
  font-size: ${RFValue(24)}px;
`;

export const HighlightCards = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: 24 },
})`
  position: absolute;
  margin-top: ${RFPercentage(20)}px;
  width: 100%;
`;

export const Transactions = styled.View`
  flex: 1;

  margin-top: ${RFPercentage(12)}px;
  padding: 0 24px;
`;

export const Title = styled.Text`
  margin-bottom: 16px;

  font-family: ${(props) => props.theme.fonts.regular};
  font-size: ${RFValue(18)}px;
`;

export const TransactionsList = styled(
  FlatList as new (
    props: FlatListProps<TransactionsListProps>
  ) => FlatList<TransactionsListProps>
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: getBottomSpace(),
  },
})``;
