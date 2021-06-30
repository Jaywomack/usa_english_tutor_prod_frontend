import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const getStaticPaths = async () => {
  const res = await fetch('http://localhost:1337/blogs');
  const data = await res.json();
  const paths = data.map((blog) => {
    return {
      params: { id: blog.id.toString() }
    };
  });
  return {
    paths: paths,
    fallback: false
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch('http://localhost:1337/blogs/' + id);
  const data = await res.json();

  return {
    props: { blog: data }
  };
};

const Blog = ({ blog }) => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <Navbar />
      <main className='min-h-screen'>
        <img src={blog.imageURL} alt='' />
        <ul>
          <li>{blog.author}</li>
          <li>{blog.id}</li>
          <li>{blog.content}</li>
          <li>{blog.description}</li>
        </ul>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
