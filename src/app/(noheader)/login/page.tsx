'use client';

import { TwitterAuthProvider } from 'firebase/auth';
import { signInWithRedirect } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAuthContext } from '~/feature/auth/AuthProvider';
import { getAuth } from '~/lib/firebase/client';

const Login = () => {
  const router = useRouter();
  const { user } = useAuthContext();

  useEffect(() => {
    if (user) {
      router.push('/');
    } else if (user === null) {
      const auth = getAuth();
      signInWithRedirect(auth, new TwitterAuthProvider());
    }
  }, [user, router]);

  return <></>; // TODO: render loading page without header
};

export default Login;
