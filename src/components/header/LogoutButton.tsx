import { getAuth, signOut } from 'firebase/auth';

export const LogoutButton = () => {
  const clickButton = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      // Sign-out successful.
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
};
