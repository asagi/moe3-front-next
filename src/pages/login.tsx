import { TwitterAuthProvider } from 'firebase/auth';
import { signInWithRedirect } from 'firebase/auth';
import { GetServerSideProps } from 'next';
import Router from 'next/router';
import { useEffect } from 'react';
import { useAuthContext } from '~/feature/auth/AuthProvider';
import { getAuth } from '~/lib/firebase/client';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const referer = ctx.req.headers.referer || '';
  console.log(referer);
  return { props: { referer } };
};

const Login = ({ referer }: { referer: string }) => {
  const { user } = useAuthContext();

  useEffect(() => {
    if (user) Router.push('/');

    // {referer !== ''}
    //  => page transition by next/link.
    // {referer === '' && user === null}
    //  => directly access and user initialized as logged out ( undefined -> null ).
    if (referer !== '' || (referer === '' && user === null)) {
      const auth = getAuth();
      signInWithRedirect(auth, new TwitterAuthProvider());
    }
  }, [user, referer]);

  return <></>; // TODO: render loading page without header
};

export default Login;
