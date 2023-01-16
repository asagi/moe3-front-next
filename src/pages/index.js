import Head from 'next/head';

import FirebaseAuthTwitterButton from '@/components/firebase/FirebaseAuthTwitterButton';
import FirebaseAuthSignoutButton from '@/components/firebase/FirebaseAuthSignoutButton';

/**
 * Home page.
 *
 * @returns {object} page
 */
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1 className='text-3xl font-bold underline'>You can use Tailwind</h1>

        <FirebaseAuthTwitterButton />
        <FirebaseAuthSignoutButton />
      </main>
    </div>
  );
}
