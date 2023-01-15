import Head from 'next/head';

import FirebaseAuthTwitterButton from '@/firebase/FirebaseAuthTwitterButton';
import FirebaseAuthSignoutButton from '@/firebase/FirebaseAuthSignoutButton';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <FirebaseAuthTwitterButton />
        <FirebaseAuthSignoutButton />
      </main>
    </div>
  );
}
