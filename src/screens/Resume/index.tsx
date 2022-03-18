import React, { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import { VictoryPie } from 'victory-native';
import { subMonths, addMonths, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import HistoryCard from '../../components/HistoryCard';

import useAuth from '../../hooks/useAuth';

import categories from '../../categories';

import {
  Container,
  LoadingContainer,
  Loading,
  Header,
  Title,
  HistoryCards,
  ChartContainer,
  MonthSelect,
  Button,
  Icon,
  Month,
} from './styles';

interface Transaction {
  type: 'positive' | 'negative';
  category: string;
  amount: string;
  date: string;
}

interface CategoryTotal {
  key: string;
  color: string;
  title: string;
  amount: number;
  amountFormatted: string;
  percent: string;
}

function Resume() {
  const { user } = useAuth();

  const theme = useTheme();

  const [isLoading, setIsLoading] = useState(false);

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [categoriesTotal, setCategoriesTotal] = useState<CategoryTotal[]>([]);

  const colorScale = categoriesTotal.map(
    (categoryTotal) => categoryTotal.color
  );

  async function loadTotalByCategories() {
    setIsLoading(true);

    const key = `@go_finances-${user.id}:transactions`;
    const storagedTransactions = await AsyncStorage.getItem(key);

    const totalByCategories: CategoryTotal[] = [];

    const transactions = storagedTransactions
      ? JSON.parse(storagedTransactions)
      : [];

    const negativeTransactions = transactions.filter(
      (transaction: Transaction) =>
        transaction.type === 'negative' &&
        new Date(transaction.date).getMonth() === selectedDate.getMonth() &&
        new Date(transaction.date).getFullYear() === selectedDate.getFullYear()
    );

    const negativeTransactionsAmount = negativeTransactions.reduce(
      (acc: number, transaction: Transaction) =>
        acc + Number(transaction.amount),
      0
    );

    categories.forEach((category) => {
      let amount = 0;

      negativeTransactions.forEach((transaction: Transaction) => {
        if (transaction.category === category.key)
          amount += Number(transaction.amount);
      });

      if (amount > 0) {
        const percent = `${(
          (amount / negativeTransactionsAmount) *
          100
        ).toFixed(0)}%`;

        const amountFormatted = amount.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        });

        totalByCategories.push({
          key: category.key,
          color: category.color,
          title: category.name,
          amount,
          amountFormatted,
          percent,
        });
      }
    });

    setCategoriesTotal(totalByCategories);
    setIsLoading(false);
  }

  useFocusEffect(
    useCallback(() => {
      loadTotalByCategories();
    }, [selectedDate])
  );

  function handleDateChange(action: 'previous' | 'next') {
    if (action === 'previous') {
      const newDate = subMonths(selectedDate, 1);
      setSelectedDate(newDate);

      return;
    }

    const newDate = addMonths(selectedDate, 1);
    setSelectedDate(newDate);
  }

  return (
    <Container>
      <Header>
        <Title>Resumo</Title>
      </Header>

      {isLoading ? (
        <LoadingContainer>
          <Loading />
        </LoadingContainer>
      ) : (
        <HistoryCards
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 24,
            paddingBottom: useBottomTabBarHeight(),
          }}
        >
          <MonthSelect>
            <Button onPress={() => handleDateChange('previous')}>
              <Icon name="chevron-left" />
            </Button>

            <Month>
              {format(selectedDate, 'MMMM, yyyy', { locale: ptBR })}
            </Month>

            <Button onPress={() => handleDateChange('next')}>
              <Icon name="chevron-right" />
            </Button>
          </MonthSelect>

          <ChartContainer>
            <VictoryPie
              data={categoriesTotal}
              x="percent"
              y="amount"
              colorScale={colorScale}
              labelRadius={80}
              style={{
                labels: {
                  fill: theme.colors.shape,
                  fontSize: RFValue(18),
                  fontWeight: 'bold',
                },
              }}
            />
          </ChartContainer>

          {categoriesTotal.map((categoryTotal) => (
            <HistoryCard
              key={categoryTotal.key}
              color={categoryTotal.color}
              title={categoryTotal.title}
              amount={categoryTotal.amountFormatted}
            />
          ))}
        </HistoryCards>
      )}
    </Container>
  );
}

export default Resume;
