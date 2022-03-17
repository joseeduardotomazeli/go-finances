import React, { createContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as AuthSession from 'expo-auth-session';
import * as AppleAuthetication from 'expo-apple-authentication';

interface User {
  id: string;
  name: string;
  email: string;
  photo?: string;
}

interface AuthContextData {
  user: User;
  signInWithGoogle(): Promise<void>;
  signInWithApple(): Promise<void>;
}

interface AuthorizationResponse {
  type: string;
  params: {
    access_token: string;
  };
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

function AuthProvider(props: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User);
  const [isLoading, setIsLoading] = useState(false);

  const { children } = props;

  useEffect(() => {
    async function loadStoragedUser() {
      setIsLoading(true);

      const storagedUser = await AsyncStorage.getItem('@go_finances:user');

      if (storagedUser) {
        const formattedUser = JSON.parse(storagedUser) as User;
        setUser(formattedUser);
      }

      setIsLoading(false);
    }

    loadStoragedUser();
  }, []);

  async function signInWithGoogle() {
    try {
      const CLIENT_ID = process.env.CLIENT_ID;
      const REDIRECT_URI = process.env.REDIRECT_URI;

      const RESPONSE_TYPE = 'token';
      const SCOPE = encodeURI('profile email');

      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

      const responseAuth = (await AuthSession.startAsync({
        authUrl,
      })) as AuthorizationResponse;

      if (responseAuth.type === 'success') {
        const responseUserInfo = await fetch(
          `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${responseAuth.params.access_token}`
        );

        const userInfo = await responseUserInfo.json();

        const userLogged = {
          id: userInfo.id,
          name: userInfo.given_name,
          email: userInfo.email,
          photo: userInfo.photo,
        };

        setUser(userLogged);

        await AsyncStorage.setItem(
          '@go_finances:user',
          JSON.stringify(userLogged)
        );
      }
    } catch {
      throw new Error();
    }
  }

  async function signInWithApple() {
    try {
      const responseAuth = await AppleAuthetication.signInAsync({
        requestedScopes: [
          AppleAuthetication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthetication.AppleAuthenticationScope.EMAIL,
        ],
      });

      if (responseAuth) {
        const userLogged = {
          id: responseAuth.user,
          name: responseAuth.fullName!.givenName!,
          email: responseAuth.email!,
          photo: undefined,
        };

        setUser(userLogged);

        await AsyncStorage.setItem(
          '@go_finances:user',
          JSON.stringify(userLogged)
        );
      }
    } catch {
      throw new Error();
    }
  }

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle, signInWithApple }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
