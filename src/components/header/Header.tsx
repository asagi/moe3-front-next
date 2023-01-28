import { useEffect, useRef } from 'react';
import FirebaseAuthSignoutButton from '@/components/firebase/FirebaseAuthSignoutButton';
import FirebaseAuthTwitterButton from '@/components/firebase/FirebaseAuthTwitterButton';
import { useAuthContext } from '@/feature/auth/AuthProvider';

export const Header = () => {
  const { user } = useAuthContext();
  const authFlag = useRef<boolean>(false);
  const button = (() => {
    // logged in
    if (user) return <FirebaseAuthSignoutButton />;
    // logged out
    if (authFlag.current) return <FirebaseAuthTwitterButton />;
    // loading
    return <></>;
  })();

  useEffect(() => {
    authFlag.current = true;
  }, [user]);

  return <>{button}</>;
};
