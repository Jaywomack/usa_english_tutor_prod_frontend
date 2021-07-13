const matter = require("gray-matter");
import marked from "marked";

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:1337/lessons");
  const data = await res.json();
  const paths = data.map((lesson) => {
    return {
      params: { id: lesson.id.toString() },
    };
  });
  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("http://localhost:1337/lessons/" + id);
  const data = await res.json();

  const { data: frontmatter, content } = matter(data.lessonContent);

  return {
    props: {
      frontmatter,
      content,
    },
  };
};

export default function Lesson({ frontmatter, content }) {
  if (frontmatter.embedID) {
    return (
      <div className="flex  w-full justify-center min-h-screen">
        <main className="min-h-screen w-full">
          <div className="post px-10  ">
            <div className="w-full ">
              <div className="relative overflow-hidden pb-2/3 rounded my-24">
                <img
                  src={frontmatter.imageURL}
                  alt=""
                  className="absolute h-full w-full object-cover"
                />
              </div>
              <h1 className="text-5xl my-12">{frontmatter.title}</h1>
              <p className="by-line font-semibold text-2xl">
                Author: {frontmatter.author}
              </p>
              <div
                dangerouslySetInnerHTML={{ __html: marked(content) }}
                className="prose prose-lg max-w-none"
              ></div>
            </div>

            <div className="aspect-w-16 aspect-h-9 my-24">
              <iframe
                className="rounded "
                src={`https://www.youtube.com/embed/${frontmatter.embedID}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </main>
      </div>
    );
  } else {
    return (
      <div className="flex  w-full justify-center min-h-screen">
        <main className="min-h-screen w-full">
          <div className="post px-10  ">
            <div className="w-full ">
              <div className="relative overflow-hidden pb-2/3 rounded my-24">
                <img
                  src={frontmatter.imageURL}
                  alt=""
                  className="absolute h-full w-full object-cover"
                />
              </div>
              <h1 className="text-5xl my-12">{frontmatter.title}</h1>
              <p className="by-line font-semibold text-2xl">
                Author: {frontmatter.author}
              </p>
              <div
                dangerouslySetInnerHTML={{ __html: marked(content) }}
                className="prose prose-lg max-w-none"
              ></div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
