import Head from 'next/head'

const Home = () => {
  return (
    // チートシートを見ながらclassNameに記述する
    <div className="min-h-screen py-0 px-2 flex flex-col justify-center items-center">
      <Head>
        <title>Sample App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-8xl text-purple-600">
        Hello sample-app!!
      </h1>
    </div>
  )
}

export default Home
