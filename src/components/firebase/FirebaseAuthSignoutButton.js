import { getAuth, signOut } from 'firebase/auth';

const clickButton = () => {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      alert('サインアウトしました。');
    })
    .catch((error) => {
      // An error happened.
      console.error(error);
    });
};

/**
 * Component for firebase auth signout.
 *
 * @returns {object} component
 */
export default function FirebaseAuthSignoutButton() {
  return (
    <div>
      <button onClick={clickButton}>ログアウト</button>
    </div>
  );
}
