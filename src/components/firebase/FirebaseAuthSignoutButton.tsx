import { getAuth, signOut } from 'firebase/auth';

export default function FirebaseAuthSignoutButton() {
  const clickButton = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      // Sign-out successful.
      alert('サインアウトしました。');
    } catch (error) {
      // An error happened.
      console.error(error);
    }
  };

  return (
    <>
      <button className='btn-secondary' onClick={clickButton}>
        ログアウト
      </button>
    </>
  );
}
