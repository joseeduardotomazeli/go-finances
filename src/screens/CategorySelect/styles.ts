import styled from 'styled-components/native';
import { FlatList, FlatListProps } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import { Category as CategoriesListProps } from '.';

interface CategoryProps {
  isActive: boolean;
}

export const Container = styled(GestureHandlerRootView)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
`;

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

export const CategoriesList = styled(
  FlatList as new (
    props: FlatListProps<CategoriesListProps>
  ) => FlatList<CategoriesListProps>
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: getBottomSpace(),
  },
})``;

export const Category = styled.TouchableOpacity<CategoryProps>`
  flex-direction: row;
  align-items: center;

  padding: ${RFValue(15)}px;

  width: 100%;

  background-color: ${(props) =>
    props.isActive
      ? props.theme.colors.secondary_light
      : props.theme.colors.background};
`;

export const Icon = styled(Feather)`
  margin-right: 16px;
  font-size: ${RFValue(20)}px;
`;

export const Name = styled.Text`
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;

export const Separator = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${(props) => props.theme.colors.text};
`;

export const Footer = styled.View`
  width: 100%;
  padding: 24px;
`;
