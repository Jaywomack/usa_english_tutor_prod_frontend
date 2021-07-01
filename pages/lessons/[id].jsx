import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const getStaticPaths = async () => {
  const res = await fetch('http://localhost:1337/lessons');
  const data = await res.json();
  const paths = data.map((lesson) => {
    return {
      params: { id: lesson.id.toString() }
    };
  });
  return {
    paths: paths,
    fallback: false
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch('http://localhost:1337/lessons/' + id);
  const data = await res.json();

  return {
    props: { lesson: data }
  };
};

const Lesson = ({ lesson }) => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <Navbar />
      <main className='min-h-screen'>
        <div className='post px-10'>
          <h2 className='mt-12 mb-1 border-b-2 border-gray-700 pb-6 text-3xl lg:text-4xl'>
            USA English Tutor
          </h2>
          <p className='by-line font-semibold mb-5 text-2xl'>
            Author: {lesson.author}
          </p>

          <div className='content-area relative'>
            <div className='relative overflow-hidden pb-2/3 rounded'>
              <img
                src={lesson.imageURL}
                alt=''
                className='absolute h-full w-full object-cover'
              />
            </div>
            <h1 className='text-6xl my-12'>{lesson.title}</h1>
            <p className=' my-12 text-gray-700 leading-loose whitespace-pre-line'>
              {lesson.intro}
            </p>
            <h2 className='text-5xl my-12'>{lesson.beginningHeadline}</h2>
            <p className='whitespace-pre-line my-12 text-gray-700 leading-loose'>
              {lesson.beginning}
            </p>

            <h3 className='text-4xl my-12'>{lesson.middleHeadline}</h3>
            <p className='whitespace-pre-line my-12 text-gray-700 leading-loose'>
              {lesson.middle}
            </p>
            <h4 className='text-3xl my-12'>{lesson.endHeadline}</h4>
            <p className='whitespace-pre-line my-12 text-gray-700 leading-loose'>
              {lesson.end}
            </p>
          </div>

          <div className='aspect-w-16 aspect-h-9 '>
            <iframe
              className='rounded'
              src={`https://www.youtube.com/embed/${lesson.embedID}`}
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Lesson;
