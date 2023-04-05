import React, {useEffect} from 'react';
import {getAuth, onAuthStateChanged, User} from 'firebase/auth';

const auth = getAuth();

export function useAuth() {
  const [userA, setUserA] = React.useState<User>();

  useEffect(() => {
    const unsubscribeFromAuthStateChanged = onAuthStateChanged(auth, user => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setUserA(user);
      } else {
        // User is signed out
        setUserA(undefined);
      }
    });

    return unsubscribeFromAuthStateChanged;
  }, []);

  return {
    userA,
  };
}
