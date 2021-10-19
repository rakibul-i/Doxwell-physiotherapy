import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import initializeAuthentication from "./initializeFirebase";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const history = useHistory();
  const location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  const auth = getAuth();

  // googel sign in
  const signInWithGoogle = () => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        setError(null);
        history.replace(from);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // create user with email and password
  const signupWithEmailAndPassword = (email, password) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        setError(null);
        setIsLoading(false);
        history.replace(from);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // sign in with email and password
  const loginWithEmailAndPassword = (email, password) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        setError(null);
        setIsLoading(false);
        history.replace(from);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // handle on state change
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsLoading(false);
      } else {
        setUser(null);
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);

  // log out
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser(null);
        history.push("/");
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return {
    user,
    isLoading,
    error,
    signInWithGoogle,
    signupWithEmailAndPassword,
    loginWithEmailAndPassword,
    logOut,
  };
};

export default useFirebase;
