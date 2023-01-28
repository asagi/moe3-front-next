import { useEffect, useLayoutEffect, useState } from 'react';
import FirebaseAuthSignoutButton from '@/components/firebase/FirebaseAuthSignoutButton';
import FirebaseAuthTwitterButton from '@/components/firebase/FirebaseAuthTwitterButton';
import { useAuthContext } from '@/feature/auth/AuthProvider';

export const Header = () => {
  const { user } = useAuthContext();
  const [loginButton, setLoginButton] = useState(<></>);

  useEffect(() => {
    setLoginButton(user ? <FirebaseAuthSignoutButton /> : <FirebaseAuthTwitterButton />);
  }, [user]);

  return <>{loginButton}</>;
};
