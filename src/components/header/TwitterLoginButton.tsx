import { TwitterAuthProvider } from 'firebase/auth';
import { signInWithRedirect } from 'firebase/auth';
import { getAuth } from '~/lib/firebase/client';

export const TwitterLoginButton = () => {
  const clickButton = () => {
    const auth = getAuth();
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
