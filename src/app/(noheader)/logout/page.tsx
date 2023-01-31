'use client';

import { useRouter } from 'next/navigation';

const Logout = () => {
  const router = useRouter();
  const onClickHandler = () => {
    router.push('/');
  };

  return (
    <div>
      <p>Logged out</p>
      <button className='btn-primary' onClick={onClickHandler}>
        TOP PAGE
      </button>
    </div>
  );
};

export default Logout;
