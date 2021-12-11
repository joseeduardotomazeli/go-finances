import React from 'react';

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
    </Container>
  );
}

export default Dashboard;
