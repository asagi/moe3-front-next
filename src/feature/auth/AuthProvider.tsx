import type { User } from '@firebase/auth';
import { onAuthStateChanged } from '@firebase/auth';
import axios from 'axios';
import { getAdditionalUserInfo } from 'firebase/auth';
import { getRedirectResult } from 'firebase/auth';
import Router from 'next/router';
import { getAuth } from '~/lib/firebase/client';
import { createContext } from 'react';
import { ReactNode } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

type GlobalAuthState = { user: User | null | undefined };
const initialState: GlobalAuthState = { user: undefined };
const AuthContext = createContext<GlobalAuthState>(initialState);

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<GlobalAuthState>(initialState);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) return setUser({ user });

      const result = await getRedirectResult(auth);
      if (!result) return setUser({ user });

      const details = getAdditionalUserInfo(result);
      if (!details) return setUser({ user });
      if (!details.profile) return setUser({ user });

      const authParam = {
        uid: user.uid,
        token: await user.getIdToken(true),
        twid: details.profile.id,
        screen_name: details.profile.screen_name
      };
      await axios.put('/api/auth', authParam);
      await user.getIdToken(true);
      console.log((await user.getIdTokenResult()).claims);
      setUser({ user });

      Router.push('/');
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
    </>
  );
};
