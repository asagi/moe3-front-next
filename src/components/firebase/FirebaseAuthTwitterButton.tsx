import { useEffect } from 'react';
import { TwitterAuthProvider } from 'firebase/auth';
import { signInWithRedirect } from 'firebase/auth';
import { getRedirectResult } from 'firebase/auth';
import { getAdditionalUserInfo } from 'firebase/auth';
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

        // ログイン時のアクセストークンは API サーバー側の情報更新にのみ使用
        console.log('accessToken:' + (await user.getIdToken(true)));
        // リフレッシュトークンはローカルストレージに保存
        console.log('refreshToken:' + user.refreshToken);

        const details = getAdditionalUserInfo(result);
        console.log(details);
        console.log('profile.screen_name: ' + details?.profile?.screen_name);
        console.log('profile.name: ' + details?.profile?.name);
        console.log('profile.id: ' + details?.profile?.id);
        console.log('profile.profile_image_url_https: ' + details?.profile?.profile_image_url_https);
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
