import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthRoutes from './auth';
import AppRoutes from './app';

import useAuth from '../hooks/useAuth';

function Routes() {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {user.id ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}

export default Routes;
