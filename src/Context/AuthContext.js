import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(!!localStorage.getItem('token'));

  const handleLogin = () => {
    // Implement your login logic here
    localStorage.setItem('token', 'your_token_here');
    setAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ authenticated, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);