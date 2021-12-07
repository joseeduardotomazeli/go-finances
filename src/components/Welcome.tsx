import React from 'react';
import { View, Text } from 'react-native';

interface WelcomeProps {
  name: string;
}

function Welcome(props: WelcomeProps) {
  const { name } = props;

  return (
    <View>
      <Text>Welcome, {name}!</Text>
    </View>
  );
}

export default Welcome;
