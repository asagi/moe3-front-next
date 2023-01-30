import Link from 'next/link';

export const TwitterLoginButton = () => {
  return (
    <>
      <Link className='btn-primary' href='/login'>
        Twitterアカウントでログイン
      </Link>
    </>
  );
};
