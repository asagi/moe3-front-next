import { TwitterAuthProvider } from 'firebase/auth';
import { signInWithRedirect } from 'firebase/auth';
import { auth } from '~/lib/firebase';

export default function FirebaseAuthTwitterButton() {
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
}
