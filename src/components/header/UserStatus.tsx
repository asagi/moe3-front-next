import { LogoutButton } from './LogoutButton';
import { TwitterLoginButton } from './TwitterLoginButton';
import { useAuthContext } from '~/feature/auth/AuthProvider';

export const UserStatus = () => {
  const { user } = useAuthContext();
  switch (user) {
    case undefined:
      return <>Now loading ...</>;
    case null:
      return <TwitterLoginButton />;
    default:
      return <LogoutButton />;
  }
};
