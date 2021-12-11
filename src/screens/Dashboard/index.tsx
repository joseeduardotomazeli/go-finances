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
        </Wrapper>
      </Header>
    </Container>
  );
}

export default Dashboard;
