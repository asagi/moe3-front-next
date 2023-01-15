import { TwitterAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '@/firebase';

const clickButton = () => {
  const provider = new TwitterAuthProvider();

  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
      console.log('Twitterアカウントでログインしました。');
    })
    .catch((error) => {
      console.error(error);
    });
};

function FirebaseAuthTwitterButton() {
  return (
    <div>
      <button onClick={clickButton}>Twitterアカウントでログイン</button>
    </div>
  );
}

export default FirebaseAuthTwitterButton;
