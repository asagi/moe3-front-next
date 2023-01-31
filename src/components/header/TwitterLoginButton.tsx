'use client';

import { useRouter } from 'next/navigation';

export const TwitterLoginButton = () => {
  const router = useRouter();
  const onClickHandler = () => {
    router.push('/login');
  };

  return (
    <button className='btn-primary' onClick={onClickHandler}>
      Twitterアカウントでログイン
    </button>
  );
};
