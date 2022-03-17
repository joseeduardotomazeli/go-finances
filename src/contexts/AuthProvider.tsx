import React, { createContext, useState, ReactNode } from 'react';
import * as AuthSession from 'expo-auth-session';

interface User {
  id: string;
  name: string;
  email: string;
  photo?: string;
}

interface AuthContextData {
  user: User;
  signInWithGoogle(): Promise<void>;
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

  const { children } = props;

  async function signInWithGoogle() {
    try {
      const CLIENT_ID = process.env.CLIENT_ID;
      const REDIRECT_URI = process.env.REDIRECT_URI;

      const RESPONSE_TYPE = 'token';
      const SCOPE = encodeURI('profile email');

      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

      const responseAuthSession = (await AuthSession.startAsync({
        authUrl,
      })) as AuthorizationResponse;

      if (responseAuthSession.type === 'success') {
        const responseUserInfo = await fetch(
          `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${responseAuthSession.params.access_token}`
        );

        const userInfo = await responseUserInfo.json();

        setUser({
          id: userInfo.id,
          name: userInfo.given_name,
          email: userInfo.email,
          photo: userInfo.photo,
        });
      }
    } catch {
      throw new Error();
    }
  }

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
