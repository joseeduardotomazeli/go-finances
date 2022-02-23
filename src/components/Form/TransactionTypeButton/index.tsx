import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, Button, Icon, Title } from './styles';

interface TransactionTypeButton extends RectButtonProps {
  type: 'positive' | 'negative';
  title: string;
  isActive: boolean;
}

const icons = {
  positive: 'arrow-up-circle',
  negative: 'arrow-down-circle',
};

function TransactionTypeButton(props: TransactionTypeButton) {
  const { type, title, isActive, ...restProps } = props;

  return (
    <Container type={type} isActive={isActive}>
      <Button {...restProps}>
        <Icon type={type} name={icons[type]} />
        <Title>{title}</Title>
      </Button>
    </Container>
  );
}

export default TransactionTypeButton;
