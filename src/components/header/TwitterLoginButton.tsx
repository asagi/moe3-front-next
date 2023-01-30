import Link from 'next/link';

export const TwitterLoginButton = () => {
  return (
    <>
      <button className='btn-primary'>
        <Link href='/login'>Twitterアカウントでログイン</Link>
      </button>
    </>
  );
};
