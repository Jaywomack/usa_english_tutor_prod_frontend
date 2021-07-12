import Link from "next/link";
import Image from "next/image";
const matter = require("gray-matter");

const LessonsIndex = ({ lessons }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <main className="min-h-screen">
        <h1 className="text-7xl my-20 text-center">All Lessons</h1>
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-12">
          {lessons.map((lesson) => (
            <Link href={"/lessons/" + lesson.id} key={lesson.id} className="">
              <div className="rounded overflow-hidden shadow-lg cursor-pointer">
                <Image
                  width={500}
                  height={500}
                  src={lesson.frontmatter.imageURL}
                  alt=""
                  className="w-full h-96"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    {lesson.frontmatter.title}
                  </div>
                  <p className="text-gray-700 text-base">
                    {lesson.frontmatter.excerpt}
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {lesson.frontmatter.level}
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {lesson.frontmatter.contentType}
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {lesson.frontmatter.simpleLevel}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export async function getStaticProps(context) {
  const res = await fetch("http://localhost:1337/lessons/");
  const data = await res.json();

  const lessons = data.map((lesson) => {
    const lessonContent = lesson.lessonContent;
    console.log(lessonContent);
    // Get front matter from markdown
    const id = lesson.id;
    const { data: frontmatter } = matter(lessonContent);

    return {
      frontmatter,
      id,
    };
  });

  return {
    props: {
      lessons: lessons,
    },
  };
}

export default LessonsIndex;
