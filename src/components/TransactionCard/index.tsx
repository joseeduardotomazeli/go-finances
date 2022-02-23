import React from 'react';

import categories from '../../categories';

import {
  Container,
  Title,
  Amount,
  Footer,
  Category,
  Icon,
  Name,
  Date,
} from './styles';

export interface TransactionCardType {
  type: 'positive' | 'negative';
  name: string;
  amount: string;
  category: string;
  date: string;
}

interface TransactionCardProps {
  data: TransactionCardType;
}

function TransactionCard(props: TransactionCardProps) {
  const { data } = props;

  const category = categories.find(
    (category) => category.key === data.category
  );

  return (
    <Container>
      <Title>{data.name}</Title>

      <Amount type={data.type}>
        {data.type === 'negative' && '- '}
        {data.amount}
      </Amount>

      <Footer>
        <Category>
          <Icon name={category!.icon} />
          <Name>{category!.name}</Name>
        </Category>

        <Date>{data.date}</Date>
      </Footer>
    </Container>
  );
}

export default TransactionCard;
