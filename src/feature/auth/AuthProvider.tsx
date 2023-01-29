import type { User } from '@firebase/auth';
import { onAuthStateChanged } from '@firebase/auth';
import axios from 'axios';
import { getAdditionalUserInfo, getRedirectResult } from 'firebase/auth';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { auth } from '~/lib/firebase/client';

type GlobalAuthState = { user: User | null | undefined };
const initialState: GlobalAuthState = { user: undefined };
const AuthContext = createContext<GlobalAuthState>(initialState);

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<GlobalAuthState>(initialState);

  useEffect(() => {
    try {
      return onAuthStateChanged(auth, async (user) => {
        if (!user) return setUser({ user });

        const result = await getRedirectResult(auth);
        if (!result) return setUser({ user });

        const details = getAdditionalUserInfo(result);
        const authParam = {
          uid: user.uid,
          token: await user.getIdToken(true),
          twid: details?.profile?.id,
          screen_name: details?.profile?.screen_name
        };
        const response = await axios.put('/api/auth', authParam);
        console.log((await user.getIdTokenResult()).claims);
        setUser({ user });
      });
    } catch (error) {
      setUser(initialState);
      throw error;
    }
  }, []);

  return (
    <>
      <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
    </>
  );
};
