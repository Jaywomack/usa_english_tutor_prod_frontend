import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <Navbar />
      <main className='min-h-screen'>Home Page</main>
      <Footer />
    </div>
  );
};
export default Home;
