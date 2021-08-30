import Link from "next/link";
import Image from "next/image";
import FeaturedButtons from "../components/FeaturedButtons";
import SubjectAreas from "../components/SubjectAreas";
import SubscribeFullWidth from "../components/SubscribeFullWidth";
import Ticker from "../components/Ticker";
const matter = require("gray-matter");

const Home = ({ lessons }) => {
  return (
    <div className="flex bg-white flex-col items-center justify-center min-h-screen w-full">
      <main className="min-h-screen w-full">
        {/* start header */}
        <header className=" w-full  h-full">
          <div
            className="container-fluid mx-auto rounded-t shadow bg-cover bg-no-repeat bg-center bg-bottom   w-full h-screen"
            style={{
              backgroundImage: "url(/static/images/hero_flag.jpeg)",
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
                  We are here to teach you English and help build a better you.
                </h1>

                {/* <Link href="/lessons">
                  <button className="w-full md:w-1/2 m-1 p-2 text-sm bg-custom-crimson-ua rounded-lg font-semibold uppercase lg:w-auto self-center px-10">
                    <span className="font-bold">LESSONS</span>
                  </button>
                </Link> */}
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
                    <div className="rounded-lg h-auto overflow-hidden">
                      <Image
                        width={478}
                        height={256}
                        alt="content"
                        className="object-cover object-center h-full w-full"
                        src={lesson.frontmatter.imageURL}
                      />
                    </div>
                    <h2 className="text-xl font-medium title-font text-gray-900 mt-1 lg:mt-5">
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
        <section className="text-gray-600 body-font bg-white">
          <div className="container px-5 py-24 mx-auto">
            <div className="inline-flex justify-between text-center w-full mb-20">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium title-font text-black text-left lg:text md:pl-32 lg:pl-48">
                Subject Areas
              </h1>
              <button className="bg-custom-crimson-ua px-5 text-white rounded">
                VIEW ALL COURSES
              </button>
            </div>
            <SubjectAreas />
          </div>
        </section>
        {/* End Subject Areas  section */}
        {/* Start Trending Courses Sections */}
        <section className="text-gray-600 body-font bg-custom-cultured">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col">
              <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl md:text-5xl mb-2 sm:mb-0">
                  Trending Courses
                </h1>
              </div>
            </div>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 cursor-pointer">
              {lessons
                .slice(0)
                .reverse()
                .map((lesson) => (
                  <Link
                    href={"/lessons/" + lesson.id}
                    key={lesson.id}
                    className=""
                  >
                    <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                      <div className="rounded-lg h-auto overflow-hidden">
                        <Image
                          width={478}
                          height={256}
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
        {/* End Trending Courses Sections */}
        {/* Start Featured Topics Sections */}
        <section className="h-60 hidden lg:block">
          <h1 className="pl-36 my-12 sm:w-2/5 text-gray-900 font-medium title-font text-2xl md:text-5xl ">
            Featured Topics
          </h1>{" "}
          <FeaturedButtons />
        </section>
        {/* End Featured Topics Sections */}
        {/* Start Full Width Email Subscribe */}
        <SubscribeFullWidth />
        {/* End Full Width Email Subscribe */}
        {/* Start Recently added section */}
        <section className="text-gray-600 body-font bg-custom-cultured">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col">
              <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl md:text-5xl mb-2 sm:mb-0">
                  Recently Added
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
                    <div className="rounded-lg h-auto overflow-hidden">
                      <Image
                        width={478}
                        height={256}
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
        {/* End Recently added section */}
        {/* Start Starting Soon section */}
        <section className="text-gray-600 body-font bg-custom-cultured">
          <div className="container px-5 py-12 mx-auto">
            <div className="flex flex-col">
              <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl md:text-5xl mb-2 sm:mb-0">
                  Starting Soon
                </h1>
              </div>
            </div>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 cursor-pointer">
              {lessons
                .slice(0)
                .reverse()
                .map((lesson) => (
                  <Link
                    href={"/lessons/" + lesson.id}
                    key={lesson.id}
                    className=""
                  >
                    <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                      <div className="rounded-lg h-auto overflow-hidden">
                        <Image
                          width={478}
                          height={256}
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
        {/* End Starting Soon section */}
        {/* Start Ticker section */}
        <Ticker />
        {/* End Ticker section*/}
        {/* start bottom image footer */}
        <header className=" w-full  h-full">
          <div
            className="container-fluid mx-auto rounded-t shadow bg-cover bg-no-repeat bg-center bg-bottom   w-full h-96"
            style={{
              backgroundImage:
                " url(https://images.unsplash.com/photo-1576414160011-98dfab3aa889?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGNvbGxlZ2V8ZW58MHwwfDB8YmxhY2t8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60)",
            }}
          >
            <div className="flex justify-center p-8 items-center pt-20 w-full">
              <h2 className="text-white text-2xl lg:text-7xl   text-center">
                Keep Learning.
              </h2>
            </div>

            <div className="text-center flex flex-wrap justify-center text-white  pb-16">
              <div className="text-center flex flex-col align-center">
                <Link href="/lessons">
                  <button className="w-full md:w-1/2 mt-5 text-sm rounded font-semibold uppercase lg:w-auto self-center px-10 py-4 hover:bg-custom-crimson-ua hover:text-custom-cultured bg-custom-cultured text-custom-crimson-ua">
                    <span className="font-bold text-xl">VIEW ALL LESSONS</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </header>
        {/* End bottom image footer */}
      </main>
    </div>
  );
};

export async function getStaticProps(context) {
  const res = await fetch(
    "https://usa-english-tutor-prod-glbns.ondigitalocean.app/lessons/"
  );
  const data = await res.json();

  const lessons = data.map((lesson) => {
    const lessonContent = lesson.lessonContent;
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

export default Home;
