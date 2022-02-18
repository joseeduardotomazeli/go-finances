import React from 'react';

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

interface Category {
  icon: string;
  name: string;
}

export interface TransactionCardType {
  type: 'positive' | 'negative';
  title: string;
  amount: string;
  category: Category;
  date: string;
}

interface TransactionCardProps {
  data: TransactionCardType;
}

function TransactionCard(props: TransactionCardProps) {
  const { data } = props;

  return (
    <Container>
      <Title>{data.title}</Title>
      <Amount type={data.type}>
        {data.type === 'negative' && '- '}
        {data.amount}
      </Amount>

      <Footer>
        <Category>
          <Icon name={data.category.icon} />
          <Name>{data.category.name}</Name>
        </Category>

        <Date>{data.date}</Date>
      </Footer>
    </Container>
  );
}

export default TransactionCard;
