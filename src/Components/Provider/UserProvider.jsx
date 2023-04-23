import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../../firebase.init";

export const authProvider = createContext(null);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);
  // user Create
  const crateUserInfo = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // User sign in
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //  SignOut from
  const logOut = () => {
    return signOut(auth);
  };
  // state Change
  useEffect(() => {
    const unchangedState = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
      setLoading(false);
    });

    return () => {
      unchangedState();
    };
  }, []);

  const authInfo = {
    crateUserInfo,
    signIn,
    user,
    logOut,
    loading,
  };
  return (
    <div>
      <authProvider.Provider value={authInfo}>{children}</authProvider.Provider>
    </div>
  );
};

export default UserProvider;
