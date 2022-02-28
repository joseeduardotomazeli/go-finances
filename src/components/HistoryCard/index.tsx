import React from 'react';

import { Container, Title, Amount } from './styles';

interface HistoryCardProps {
  color: string;
  title: string;
  amount: string;
}

function HistoryCard(props: HistoryCardProps) {
  const { color, title, amount } = props;

  return (
    <Container color={color}>
      <Title>{title}</Title>
      <Amount>{amount}</Amount>
    </Container>
  );
}

export default HistoryCard;
