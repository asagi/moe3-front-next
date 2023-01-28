import SignoutButton from './LogoutButton';
import TwitterLoginButton from './TwitterLoginButton';
import { useAuthContext } from '~/feature/auth/AuthProvider';

export const Header = () => {
  const { user } = useAuthContext();

  const button = (() => {
    // logged in
    if (user != null) return <SignoutButton />;
    // logged out
    if (user === null) return <TwitterLoginButton />;
    // now loading ...
    return <></>;
  })();

  return <>{button}</>;
};
