'use client';

import { TwitterAuthProvider } from 'firebase/auth';
import { signInWithRedirect } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { useAuthContext } from '~/feature/auth/AuthProvider';
import { getAuth } from '~/lib/firebase/client';
import styles from '~/styles/login.module.scss';

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

  return (
    <div className={styles.overlay}>
      <div className={styles.spinner}>
        <ClipLoader color='#36d7b7' size='50px' />
      </div>
    </div>
  );
};

export default Login;
