import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(undefined);

  const verifyAuth = async () => {
    const isLoggedIn = await axios.get('/api/auth/is_logged_in');
    setAuth(isLoggedIn.data);
    return isLoggedIn.data;
  };

  useEffect(() => {
    verifyAuth();
  }, []);

  return (
    // eslint-disable-next-line react/react-in-jsx-scope, react/jsx-no-constructed-context-values
    <AuthContext.Provider value={{ auth, verifyAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
