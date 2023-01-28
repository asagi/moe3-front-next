import { useEffect, useRef } from 'react';
import SignoutButton from './LogoutButton';
import TwitterLoginButton from './TwitterLoginButton';
import { useAuthContext } from '~/feature/auth/AuthProvider';

export const Header = () => {
  const initialized = useRef<boolean>(false);

  const { user } = useAuthContext();
  initialized.current = user !== undefined;

  const button = (() => {
    // logged in
    if (user) return <SignoutButton />;
    // logged out
    if (initialized.current) return <TwitterLoginButton />;
    // now loading ...
    return <></>;
  })();

  return <>{button}</>;
};
