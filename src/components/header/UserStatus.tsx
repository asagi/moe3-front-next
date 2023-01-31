'use client';

import { LogoutButton } from './LogoutButton';
import { TwitterLoginButton } from './TwitterLoginButton';
import { useAuthContext } from '~/feature/auth/AuthProvider';
import ClipLoader from 'react-spinners/ClipLoader';

export const UserStatus = () => {
  const { user } = useAuthContext();
  switch (user) {
    case undefined:
      return <ClipLoader color='#36d7b7' />;
    case null:
      return <TwitterLoginButton />;
    default:
      return <LogoutButton />;
  }
};
