import React from 'react';

import HighlightCard from '../../components/HighlightCard';

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
} from './styles';

function Dashboard() {
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
          amount="R$ 17.400,00"
          lastTransaction="Última entrada dia 1 de Fevereiro"
        />

        <HighlightCard
          title="Saídas"
          type="down"
          amount="R$ 1.259,00"
          lastTransaction="Última entrada dia 18 de Fevereiro"
        />

        <HighlightCard
          title="Total"
          type="total"
          amount="R$ 16.141,00"
          lastTransaction="01 à 20 de Fevereiro"
        />
      </HighlightCards>
    </Container>
  );
}

export default Dashboard;
