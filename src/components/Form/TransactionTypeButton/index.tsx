import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Icon, Title } from './styles';

interface TransactionTypeButton extends TouchableOpacityProps {
  type: 'up' | 'down';
  title: string;
  isActive: boolean;
}

const icons = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
};

function TransactionTypeButton(props: TransactionTypeButton) {
  const { type, title, isActive, ...restProps } = props;

  return (
    <Container type={type} isActive={isActive} {...restProps}>
      <Icon type={type} name={icons[type]} />
      <Title>{title}</Title>
    </Container>
  );
}

export default TransactionTypeButton;
