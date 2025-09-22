import React, { useEffect, useState } from "react";
import { createContext } from "react";
export const AuthContextObj = createContext();

export default function AuthContextProvider({ children }) {
  const [userToken, setUserToken] = useState(null);
  const [userId, setUserId] = useState(null);
  useEffect(() => {
    const tkn = localStorage.getItem("tkn");
    if (tkn != null) {
      setUserToken(tkn);
    }
  }, []);

  return (
    <AuthContextObj.Provider
      value={{ setUserToken, userToken, userId, setUserId }}
    >
      {children}
    </AuthContextObj.Provider>
  );
}
