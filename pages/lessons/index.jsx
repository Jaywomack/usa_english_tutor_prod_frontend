import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';
import Image from 'next/image';

const LessonsIndex = ({ lessons }) => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <Navbar />
      <main className='min-h-screen'>
        <h1 className='text-7xl'>All Lessons</h1>
        <div className='p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-12'>
          {lessons.map((lesson) => (
            <Link href={'/lessons/' + lesson.id} key={lesson.id} className=''>
              <div className='rounded overflow-hidden shadow-lg cursor-pointer'>
                <Image
                  width={500}
                  height={500}
                  src={lesson.imageURL}
                  alt=''
                  className='w-full h-96'
                />
                <div className='px-6 py-4'>
                  <div className='font-bold text-xl mb-2'>{lesson.title}</div>
                  <p className='text-gray-700 text-base'>
                    {lesson.description}
                  </p>
                </div>
                <div className='px-6 pt-4 pb-2'>
                  <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                    {lesson.level}
                  </span>
                  <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                    {lesson.contentType}
                  </span>
                  <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                    {lesson.simpleLevel}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export async function getStaticProps(context) {
  const res = await fetch('http://localhost:1337/lessons/');
  const data = await res.json();
  console.log(data);
  return {
    props: {
      lessons: data
    }
  };
}

export default LessonsIndex;
