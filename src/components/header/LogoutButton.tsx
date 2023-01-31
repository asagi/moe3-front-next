'use client';

import { getAuth, signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';

export const LogoutButton = () => {
  const router = useRouter();
  const clickButton = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      router.push('/logout');
    } catch (error) {
      // An error happened.
      console.error(error);
    }
  };

  return (
    <>
      <button className='btn-secondary' onClick={clickButton}>
        ログアウト
      </button>
    </>
  );
};
