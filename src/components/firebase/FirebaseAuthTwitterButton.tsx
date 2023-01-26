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
        console.log(result.user);

        console.log('accessToken:' + (await user.getIdToken(true)));
        console.log('refreshToken:' + user.refreshToken);
        const details = getAdditionalUserInfo(result);
        console.log(details);
        console.log('profile.screen_name: ' + details?.profile?.screen_name);
        console.log('profile.name: ' + details?.profile?.name);
        console.log('profile.id: ' + details?.profile?.id);
        console.log('profile.profile_image_url_https: ' + details?.profile?.profile_image_url_https);

        // TODO: /api/auth に put
        const param = {
          token: await user.getIdToken(true),
          twid: details?.profile?.id,
          screen_name: details?.profile?.screen_name
        };
        console.log('hoge:' + JSON.stringify(param));
        axios
          .put('/api/auth', param)
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
