import axios from 'axios';
import { TwitterAuthProvider } from 'firebase/auth';
import { signInWithRedirect } from 'firebase/auth';
import { getRedirectResult } from 'firebase/auth';
import { getAdditionalUserInfo } from 'firebase/auth';
import { useEffect } from 'react';
import { auth } from '@/lib/firebase';

export default function FirebaseAuthTwitterButton() {
  const clickButton = () => {
    signInWithRedirect(auth, new TwitterAuthProvider());
  };

  useEffect(() => {
    getRedirectResult(auth).then(async (result) => {
      if (result && result.user) {
        const user = result.user;
        const details = getAdditionalUserInfo(result);
        axios
          .put('/api/auth', {
            token: await user.getIdToken(true),
            twid: details?.profile?.id,
            screen_name: details?.profile?.screen_name
          })
          .then((response) => {
            console.log(response.data);
            // TODO: set returned token to custom claim
          })
          .catch((e) => {
            console.log(e.message);
          });
      }
    });
  }, []);

  return (
    <div>
      <button className='btn-primary' onClick={clickButton}>
        Twitterアカウントでログイン
      </button>
    </div>
  );
}
