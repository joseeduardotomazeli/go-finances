import React from 'react';

import HighlightCard from '../../components/HighlightCard';
import TransactionCard, {
  TransactionCardType,
} from '../../components/TransactionCard';

import {
  Container,
  Header,
  Wrapper,
  Info,
  Photo,
  User,
  Greeting,
  Name,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionsList,
} from './styles';

export interface TransactionsListProps extends TransactionCardType {
  id: string;
}

function Dashboard() {
  const transactions: TransactionsListProps[] = [
    {
      id: '1',
      type: 'positive',
      title: 'Desenvolvimento de Website',
      amount: 'R$ 12.000,00',
      category: {
        icon: 'dollar-sign',
        name: 'Desenvolvimento',
      },
      date: '18/02/2022',
    },
    {
      id: '2',
      type: 'negative',
      title: 'Aluguel',
      amount: 'R$ 1.100,00',
      category: {
        icon: 'shopping-bag',
        name: 'Casa',
      },
      date: '18/02/2022',
    },
  ];

  return (
    <Container>
      <Header>
        <Wrapper>
          <Info>
            <Photo
              source={{
                uri: 'https://avatars.githubusercontent.com/u/75822961?v=4.png',
              }}
            />

            <User>
              <Greeting>Olá,</Greeting>
              <Name>José Eduardo</Name>
            </User>
          </Info>

          <Icon name="power" />
        </Wrapper>
      </Header>

      <HighlightCards>
        <HighlightCard
          title="Entradas"
          type="up"
          amount="R$ 12.400,00"
          lastTransaction="Última entrada dia 18 de Fevereiro"
        />

        <HighlightCard
          title="Saídas"
          type="down"
          amount="R$ 1.100,00"
          lastTransaction="Última saída dia 18 de Fevereiro"
        />

        <HighlightCard
          title="Total"
          type="total"
          amount="R$ 10.900,00"
          lastTransaction="01 a 20 de Fevereiro"
        />
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>

        <TransactionsList
          data={transactions}
          keyExtractor={(transaction) => transaction.id}
          renderItem={(data) => <TransactionCard data={data.item} />}
        />
      </Transactions>
    </Container>
  );
}

export default Dashboard;
