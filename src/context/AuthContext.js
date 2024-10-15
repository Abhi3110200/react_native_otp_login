
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [confirmation, setConfirmation] = useState(null);

  return (
    <AuthContext.Provider value={{ confirmation, setConfirmation }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
