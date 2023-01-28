import { getAuth, signOut } from 'firebase/auth';

export default function FirebaseAuthSignoutButton() {
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

  return (
    <div>
      <button className='btn-secondary' onClick={clickButton}>
        ログアウト
      </button>
    </div>
  );
}
