import React, { createContext } from "react";
import useFirebase from "../firebase/useFirebase";
import useServices from "../hooks/useServices";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [services] = useServices();
  const {
    user,
    error,
    isLoading,
    loginWithEmailAndPassword,
    signInWithGoogle,
    signupWithEmailAndPassword,
    logOut,
  } = useFirebase();
  return (
    <AuthContext.Provider
      value={{
        services,
        user,
        error,
        isLoading,
        loginWithEmailAndPassword,
        signInWithGoogle,
        signupWithEmailAndPassword,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
