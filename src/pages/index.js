import Head from 'next/head';

import Map from '@/components/map/Map';
import FirebaseAuthTwitterButton from '@/components/firebase/FirebaseAuthTwitterButton';
import FirebaseAuthSignoutButton from '@/components/firebase/FirebaseAuthSignoutButton';

/**
 * Home page.
 *
 * @returns {?} page
 */
export default function Home() {
  return (
    <div>
      <Head>
        <title>Diplomacy MOE</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1 className='text-3xl font-bold underline'>Diplomacy MOE3 Reboot</h1>
        <Map />

        <FirebaseAuthTwitterButton />
        <FirebaseAuthSignoutButton />
      </main>
    </div>
  );
}
