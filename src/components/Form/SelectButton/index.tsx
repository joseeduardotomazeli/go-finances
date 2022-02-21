import React from 'react';

import { Container, Title, Icon } from './styles';

interface SelectButtonProps {
  title: string;
  onPress: () => void;
}

function SelectButton(props: SelectButtonProps) {
  const { title, onPress } = props;

  return (
    <Container onPress={onPress}>
      <Title>{title}</Title>
      <Icon name="chevron-down" />
    </Container>
  );
}

export default SelectButton;
