import Link from "next/link";
import Meta from "../components/partials/Meta";
const Services = () => {
  return (
    <>
      <Meta
        title="Services | Our services currently range from English lessons and 1 on 1 tutoring for beginners all the way to experts as well as MCAT, UCAT and IELTS tutoring."
        desc="Our expert tutors are all highly educated Americans with neutral American accents. They offer a range of services that can help an ESL student to learn beginner English all the way to fluency, with an American accent. Currently we offer English lessons, MCAT, UCAT and IELTS tutoring."
      />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <main className="min-h-screen">
          <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
              <div class="flex flex-col text-center w-full mb-20">
                <h2 class="text-3xl lg:text-6xl text-custom-space-cadet tracking-widest font-medium title-font mb-5">
                  Services
                </h2>

                <p class="lg:w-2/3 mx-auto leading-relaxed text-base lg:text-xl">
                  We offer a wide array of lessons and services that will help
                  you improve your English quickly.
                </p>
              </div>
              <div class="flex flex-wrap">
                <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                  <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                    IELTS Prep
                  </h2>
                  <p class="leading-relaxed text-base mb-4">
                    Get custom tailored lessons to improve your IELTS scores
                    with a tutor who specializes in IELTS training and tutoring
                    that will work with you 1 on 1. Master the IELTS with USA
                    English Tutor.
                  </p>
                  <Link href="/tutors">
                    <a class="text-indigo-500 inline-flex items-center">
                      Tutors
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </Link>
                </div>
                <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                  <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                    Business English
                  </h2>
                  <p class="leading-relaxed text-base mb-4">
                    Book Business English lessons and help improve your ability
                    to work in the world economy and improve your business
                    credentials. Business English with USA English Tutor.
                  </p>
                  <Link href="/tutors">
                    <a class="text-indigo-500 inline-flex items-center">
                      Tutors
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </Link>
                </div>
                <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                  <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                    English Tutoring for MCAT / UKCAT / BMAT
                  </h2>
                  <p class="leading-relaxed text-base mb-4">
                    1 on 1 tutoring to help you prepare to test into medical
                    school in the USA, UK and Europe in English. Medical school
                    prep with USA English Tutor
                  </p>
                  <Link href="/tutors">
                    <a class="text-indigo-500 inline-flex items-center">
                      Tutors
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </Link>
                </div>
                <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                  <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                    Group Events and Presentations
                  </h2>
                  <p class="leading-relaxed text-base mb-4">
                    Group events are a way to get a lot of students a 1-8 hour
                    presentation on a specific subject. We tailor these events
                    to the clients needs and are open to speaking about a wide
                    array of subjects.
                  </p>
                  <Link href="/tutors">
                    <a class="text-indigo-500 inline-flex items-center">
                      Tutors
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </Link>
                </div>
              </div>
              <Link href="/lessons">
                <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Free Lessons
                </button>
              </Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};
export default Services;
