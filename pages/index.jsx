import Link from "next/link";
const matter = require("gray-matter");

const Home = ({ lessons }) => {
  return (
    <div className="flex bg-white flex-col items-center justify-center min-h-screen w-full">
      <main className="min-h-screen w-full">
        {/* start header */}
        <header className=" w-full  h-full">
          <div
            className="container-fluid mx-auto rounded-t shadow bg-cover bg-no-repeat bg-center bg-bottom   w-full h-96"
            style={{
              backgroundImage:
                " url(https://images.unsplash.com/photo-1464660756002-dd9f9a92b01b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YW1lcmljYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1 )",
            }}
          >
            <div className="flex justify-center p-8 items-center pt-20 w-full">
              <h2 className="text-white text-2xl lg:text-7xl   text-center">
                USA English Tutor
              </h2>
            </div>

            <div className="text-center flex flex-wrap justify-center text-white  pb-16">
              <div className="text-center flex flex-col align-center">
                <h1 className="font-sans sm:px-6  lg:text-4xl mb-4 drop-shadow-2xl">
                  We are here to teach you English and build a better you.
                </h1>

                <Link href="/lessons">
                  <button className="w-full md:w-1/2 m-1 p-2 text-sm bg-custom-crimson-ua rounded-lg font-semibold uppercase lg:w-auto self-center px-10">
                    <span className="font-bold">LESSONS</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </header>
        {/* End Header */}
        {/* start featured lessons section */}

        <section className="text-gray-600 body-font bg-custom-cultured">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col">
              <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl md:text-5xl mb-2 sm:mb-0">
                  Featured Lessons
                </h1>
              </div>
            </div>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 cursor-pointer">
              {lessons.map((lesson) => (
                <Link
                  href={"/lessons/" + lesson.id}
                  key={lesson.id}
                  className=""
                >
                  <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                    <div className="rounded-lg h-64 overflow-hidden">
                      <img
                        alt="content"
                        className="object-cover object-center h-full w-full"
                        src={lesson.frontmatter.imageURL}
                      />
                    </div>
                    <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                      {lesson.frontmatter.title}
                    </h2>
                    <p className="text-base leading-relaxed mt-2">
                      {lesson.frontmatter.excerpt}
                    </p>
                    <a className="text-indigo-500 inline-flex items-center mt-3">
                      Read More
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* End featured lessons section */}
        {/* Start Subject Areas section */}
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Our Team
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
                gentrify, subway tile poke farm-to-table. Franzen you probably
                haven't heard of them.
              </p>
            </div>
            {/* start subjects container */}
            <div className="flex flex-wrap -m-2">
              {lessons.tags.map((tag) => (
                <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                  <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                    <div className="flex-grow">
                      <p className="text-gray-500">{tag}</p>
                    </div>
                  </div>
                </div>
              ))}
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div className="flex-grow">
                    <p className="text-gray-500">UI Designer</p>
                  </div>
                </div>
              </div>
            </div>
            {/*end subjects container */}
          </div>
        </section>
        {/* End Subject Areas  section */}

        {/* Start mission section */}
        <section className="mission text-center bg-custom-space-cadet">
          <p className="text-white lg:text-5xl px-12 py-10  italic leading-loose text-red-600 ">
            We want to build a better you through English education.
          </p>
          <p className="text-white filter drop-shadow-lg lg:text-5xl px-12 py-10   italic leading-loose ">
            We want to build a better world by helping you be the best you can
            be.
          </p>
          <p className="text-white lg:text-5xl px-12 py-10   italic leading-loose text-blue-500 ">
            Then together we can build a better world by helping others.
          </p>
        </section>
        {/* End Mission section */}
      </main>
    </div>
  );
};

export async function getStaticProps(context) {
  const res = await fetch("http://localhost:1337/lessons/");
  const data = await res.json();

  const lessons = data.map((lesson) => {
    const lessonContent = lesson.lessonContent;
    // Get front matter from markdown
    const id = lesson.id;
    const { data: frontmatter } = matter(lessonContent);

    return {
      frontmatter,
      id,
      tags,
    };
  });

  return {
    props: {
      lessons: lessons,
    },
  };
}

export default Home;
