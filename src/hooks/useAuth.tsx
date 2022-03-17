import { useContext } from 'react';

import { AuthContext } from '../contexts/AuthProvider';

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export default useAuth;
