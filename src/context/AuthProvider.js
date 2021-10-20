import React, { createContext } from "react";
import useFirebase from "../firebase/useFirebase";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
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
