import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, Title } from './styles';

interface ButtonProps extends RectButtonProps {
  title: string;
  onPress: () => void;
}

function Button(props: ButtonProps) {
  const { title, onPress, ...restProps } = props;

  return (
    <Container onPress={onPress} {...restProps}>
      <Title>{title}</Title>
    </Container>
  );
}

export default Button;
