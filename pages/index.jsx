import Link from "next/link";
import { faUniversity } from "@fortawesome/free-solid-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { faChalkboardTeacher } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Home = () => {
  return (
    <div className="flex bg-black flex-col items-center justify-center min-h-screen w-full">
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
              <h2 className="text-white lg:text-6xl   text-center">
                USA English Tutor
              </h2>
            </div>

            <div className="text-center flex flex-wrap justify-center text-white  pb-16">
              <div className="text-center flex flex-col align-center">
                <h1 className="font-sans sm:px-6  lg:text-2xl mb-4 drop-shadow-2xl">
                  We are here to teach you English and build a better you.
                </h1>
                <h2 className="mt-2 mb-6  sm:px-6 pb-6 lg:text-2xl drop-shadow-2xl">
                  Nothing can stop you but yourself. It is time to take your
                  future in your own hands
                </h2>
                <Link href="/lessons">
                  <button className="w-full m-1 p-2 text-sm bg-blue-700 rounded-lg font-semibold uppercase lg:w-auto self-center px-10">
                    <span className="font-bold">LESSONS</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </header>
        {/* End Header */}
        {/* start cards section */}

        <section className=" text-gray-200 bg-black">
          <div className="max-w-6xl mx-auto px-5 py-24 ">
            <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
              <h1 className=" title-font mb-6 text-4xl font-extrabold leading-10 tracking-tight text-center sm:text-5xl sm:leading-none md:text-6xl">
                {" "}
                Check Out Our Content And Services
              </h1>
              <p className="lg:w-1/2 w-full md:text-3xl leading-relaxed text-base">
                Our Content is on multiple platforms for your convenience and
                benefit
              </p>
            </div>
            <div className="flex flex-wrap -m-4">
              <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="border border-blue-500 p-6 rounded-lg hover:scale-95 ">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-black text-blue-500 mb-4 justify-self-center ">
                    <FontAwesomeIcon
                      className=" fill-current h-10 w-10 "
                      icon={faVideo}
                    />
                  </div>
                  <h2 className="text-lg  font-medium title-font mb-2">
                    USA English Tutor on Youtube{" "}
                  </h2>
                  <p className="leading-relaxed text-base">
                    Our complete video library at your disposal
                  </p>
                </div>
              </div>

              <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="border border-blue-500 p-6 rounded-lg hover:scale-95">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-black text-blue-500 mb-4 italic">
                    <FontAwesomeIcon
                      className=" fill-current h-10 w-10   "
                      icon={faUniversity}
                    />
                  </div>
                  <h2 className="text-lg  font-medium title-font mb-2">
                    USA English Tutor Lessons
                  </h2>
                  <p className="leading-relaxed text-base">
                    With USA English Tutor lessons you get speaking, reading,
                    writing and listening
                  </p>
                </div>
              </div>
              <div className="xl:w-1/3 md:w-1/2 p-4 ">
                <div className="border border-blue-500 p-6 rounded-lg hover:scale-95">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-black text-blue-500 mb-4">
                    <FontAwesomeIcon
                      className=" fill-current h-10 w-10   "
                      icon={faChalkboardTeacher}
                    />
                  </div>
                  <h2 className="text-lg  font-medium title-font mb-2">
                    English Tutoring
                  </h2>
                  <p className="leading-relaxed text-base">
                    Schedule a time with one of our available tutors
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* End cards section */}
        {/* Start mission section */}
        <section className="mission text-center">
          <p className="text-white lg:text-5xl px-12 py-20  italic leading-loose text-red-600 ">
            We want to build a better you through English education.
          </p>
          <p className="text-white lg:text-5xl px-12 py-20   italic leading-loose ">
            We want to build a better world by helping you be the best you can
            be.
          </p>
          <p className="text-white lg:text-5xl px-12 py-20   italic leading-loose text-blue-500 ">
            Then together we can build a better world by helping others.
          </p>
        </section>
        {/* End Mission section */}
      </main>
    </div>
  );
};
export default Home;
