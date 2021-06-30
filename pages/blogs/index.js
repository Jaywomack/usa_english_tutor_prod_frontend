import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';

const BlogsIndex = ({ blogs }) => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <Navbar />
      <main className='min-h-screen'>
        <h1 className='text-7xl'>All Blogs</h1>
        {blogs.map((blog) => (
          <Link href={'/blogs/' + blog.id} key={blog.id}>
            {blog.author}
          </Link>
        ))}
      </main>
      <Footer />
    </div>
  );
};

export async function getStaticProps(context) {
  const res = await fetch('http://localhost:1337/blogs/');
  const data = await res.json();
  console.log(data);
  return {
    props: {
      blogs: data
    }
  };
}

export default BlogsIndex;
