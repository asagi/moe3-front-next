import { useEffect, useRef } from 'react';
import SignoutButton from './LogoutButton';
import TwitterLoginButton from './TwitterLoginButton';
import { useAuthContext } from '~/feature/auth/AuthProvider';

export const Header = () => {
  const { user } = useAuthContext();
  const authFlag = useRef<boolean>(false);
  const button = (() => {
    // logged in
    if (user) return <SignoutButton />;
    // logged out
    if (authFlag.current) return <TwitterLoginButton />;
    // loading
    return <></>;
  })();

  useEffect(() => {
    authFlag.current = true;
  }, [user]);

  return <>{button}</>;
};
