import Head from 'next/head';
import Board from '~/components/board/Board';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Diplomacy MOE</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1 className='text-3xl font-bold underline'>Diplomacy MOE3 Reboot</h1>
        <Board boardData={undefined} />
      </main>
    </div>
  );
}
