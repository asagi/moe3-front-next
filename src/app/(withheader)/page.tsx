import Board from '~/components/board/Board';

const Home = () => {
  return (
    <main>
      <h1 className='text-3xl font-bold underline'>Diplomacy MOE3 Reboot</h1>
      <Board boardData={undefined} />
    </main>
  );
};

export default Home;
