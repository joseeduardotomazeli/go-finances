import React from 'react';
import { TextInputProps } from 'react-native';

import { Container } from './styles';

type InputProps = TextInputProps;

function Input(props: InputProps) {
  const { ...restProps } = props;

  return <Container {...restProps} />;
}

export default Input;
