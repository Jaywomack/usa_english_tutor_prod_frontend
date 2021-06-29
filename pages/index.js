import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <Head>
        <title>USA English Tutor</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <main className='min-h-screen'></main>
      <Footer />
    </div>
  );
}
