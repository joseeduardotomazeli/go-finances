import React from 'react';

import {
  Container,
  Header,
  Title,
  Icon,
  Footer,
  Amount,
  LastTransaction,
} from './styles';

interface HighlightCardProps {
  title: string;
  type: 'positive' | 'negative' | 'total';
  amount: string;
  lastTransaction: string;
}

const icon = {
  positive: 'arrow-up-circle',
  negative: 'arrow-down-circle',
  total: 'dollar-sign',
};

function HighlightCard(props: HighlightCardProps) {
  const { title, type, amount, lastTransaction } = props;

  return (
    <Container type={type}>
      <Header>
        <Title type={type}>{title}</Title>
        <Icon type={type} name={icon[type]} />
      </Header>

      <Footer>
        <Amount type={type}>{amount}</Amount>
        <LastTransaction type={type}>{lastTransaction}</LastTransaction>
      </Footer>
    </Container>
  );
}

export default HighlightCard;
