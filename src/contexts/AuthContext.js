import { createContext, useContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth';
import { auth } from '../firebase';
import context from 'react-bootstrap/esm/AccordionContext';

export const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

   const signIn = (email, password) =>  {
    return signInWithEmailAndPassword(auth, email, password)
   }

  const logout = () => {
      return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const context = {
    register,
    logout,
    signIn,
    // If user is null or undefined, user?.uid will safely return undefined.
    // You can use !!user?.accessToken to convert the value to a boolean.
    // It will be true if accessToken is a truthy value, and false otherwise.
    userId: user?.uid ? user.uid : null,
    isAuthenticated: !!user?.accessToken
  }

  return (
    <UserContext.Provider value={context}>
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};