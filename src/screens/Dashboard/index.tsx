import React, { useState, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import HighlightCard from '../../components/HighlightCard';
import TransactionCard, {
  TransactionCardType,
} from '../../components/TransactionCard';

import useAuth from '../../hooks/useAuth';

import {
  Container,
  LoadingContainer,
  Loading,
  Header,
  Wrapper,
  Info,
  Photo,
  User,
  Greeting,
  Name,
  LogOutButton,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionsList,
} from './styles';

interface HighlightProps {
  amount: string;
  lastTransaction: string;
}

interface HighlightData {
  positive: HighlightProps;
  negative: HighlightProps;
  total: HighlightProps;
}

export interface TransactionsListProps extends TransactionCardType {
  id: string;
}

function Dashboard() {
  const { user, signOut } = useAuth();

  const [isLoading, setIsLoading] = useState(true);

  const [highlightData, setHighlightData] = useState<HighlightData>(
    {} as HighlightData
  );

  const [transactions, setTransactions] = useState<TransactionsListProps[]>([]);

  function getLastTransactionDateByType(
    collection: TransactionsListProps[],
    type: 'positive' | 'negative'
  ) {
    const lastTransactionDateByType = new Date(
      Math.max.apply(
        Math,
        collection
          .filter((transaction) => transaction.type === type)
          .map((transaction) => new Date(transaction.date).getTime())
      )
    );

    return `${lastTransactionDateByType.getDate()} de ${lastTransactionDateByType.toLocaleString(
      'pt-BR',
      { month: 'long' }
    )}`;
  }

  async function loadTransactions() {
    const key = `@go_finances-${user.id}:transactions`;
    const storagedTransactions = await AsyncStorage.getItem(key);

    const transactions = storagedTransactions
      ? JSON.parse(storagedTransactions)
      : [];

    let positiveAmount = 0;
    let negativeAmount = 0;

    const formattedTransactions: TransactionsListProps[] = transactions.map(
      (transaction: TransactionsListProps) => {
        if (transaction.type === 'positive')
          positiveAmount += Number(transaction.amount);
        else negativeAmount += Number(transaction.amount);

        const amount = Number(transaction.amount).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        });

        const date = new Intl.DateTimeFormat('pt-BR', {
          day: '2-digit',
          month: '2-digit',
          year: '2-digit',
        }).format(new Date(transaction.date));

        return {
          ...transaction,
          amount,
          date,
        };
      }
    );

    const total = positiveAmount - negativeAmount;

    const lastPositiveTransactionDate = getLastTransactionDateByType(
      transactions,
      'positive'
    );

    const lastNegativeTransactionDate = getLastTransactionDateByType(
      transactions,
      'negative'
    );

    setHighlightData({
      positive: {
        amount: positiveAmount.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }),
        lastTransaction: `Última entrada dia ${lastPositiveTransactionDate}`,
      },
      negative: {
        amount: negativeAmount.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }),
        lastTransaction: `Última saída dia ${lastNegativeTransactionDate}`,
      },
      total: {
        amount: total.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }),
        lastTransaction: `01 a ${lastNegativeTransactionDate}`,
      },
    });

    setTransactions(formattedTransactions);
    setIsLoading(false);
  }

  useFocusEffect(
    useCallback(() => {
      loadTransactions();
    }, [])
  );

  return (
    <Container>
      {isLoading ? (
        <LoadingContainer>
          <Loading />
        </LoadingContainer>
      ) : (
        <>
          <Header>
            <Wrapper>
              <Info>
                <Photo
                  source={{
                    uri: user.photo,
                  }}
                />

                <User>
                  <Greeting>Olá,</Greeting>
                  <Name>{user.name}</Name>
                </User>
              </Info>

              <LogOutButton onPress={signOut}>
                <Icon name="power" />
              </LogOutButton>
            </Wrapper>
          </Header>

          <HighlightCards>
            <HighlightCard
              type="positive"
              title="Entradas"
              amount={highlightData.positive.amount}
              lastTransaction={highlightData.positive.lastTransaction}
            />

            <HighlightCard
              type="negative"
              title="Saídas"
              amount={highlightData.negative.amount}
              lastTransaction={highlightData.negative.lastTransaction}
            />

            <HighlightCard
              type="total"
              title="Total"
              amount={highlightData.total.amount}
              lastTransaction={highlightData.total.lastTransaction}
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
        </>
      )}
    </Container>
  );
}

export default Dashboard;
