import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Title } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

function Button(props: ButtonProps) {
  const { title, ...restProps } = props;

  return (
    <Container {...restProps}>
      <Title>{title}</Title>
    </Container>
  );
}

export default Button;
