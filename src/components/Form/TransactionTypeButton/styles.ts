import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

interface ContainerProps {
  type: 'up' | 'down';
  isActive: boolean;
}

interface IconProps {
  type: 'up' | 'down';
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 16px;

  width: 48%;

  border-width: ${(props) => (props.isActive ? 0 : 1.5)}px;
  border-style: solid;
  border-color: ${(props) => props.theme.colors.text};
  border-radius: 5px;

  ${(props) =>
    props.type === 'up' &&
    props.isActive &&
    css`
      background-color: ${(props) => props.theme.colors.success_light};
    `};

  ${(props) =>
    props.type === 'down' &&
    props.isActive &&
    css`
      background-color: ${(props) => props.theme.colors.attention_light};
    `};
`;

export const Icon = styled(Feather)<IconProps>`
  margin-right: 12px;

  color: ${(props) =>
    props.type === 'up'
      ? props.theme.colors.success
      : props.theme.colors.attention};

  font-size: ${RFValue(24)}px;
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.colors.text_dark};
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;
