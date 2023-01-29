import { TwitterAuthProvider } from 'firebase/auth';
import { signInWithRedirect } from 'firebase/auth';
import { auth } from '~/lib/firebase/client';

export const TwitterLoginButton = () => {
  const clickButton = () => {
    signInWithRedirect(auth, new TwitterAuthProvider());
  };

  return (
    <>
      <button className='btn-primary' onClick={clickButton}>
        Twitterアカウントでログイン
      </button>
    </>
  );
};
