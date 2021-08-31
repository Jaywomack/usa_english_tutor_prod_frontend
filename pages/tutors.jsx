import Image from "next/image";
import Meta from "../components/partials/Meta";
const Tutors = () => {
  return (
    <>
      <Meta
        title="Tutors | English Tutors with an american accent. USA English currently offers English tutoring as well as tutoring for MCAT,UCAT, and IELTS. Our English Tutors are highly skilled American teachers and subject matter experts in American English"
        desc="Our tutors all have American accents and can help students with English lessons that will help them speak, read, write and listen to English better, and with an American accent. In addition to normal English tutoring that spans beginner lessons to native fluency, we also offer MCAT, UKCAT, and IELTS tutoring."
      />
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <Image
            width={500}
            height={410}
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src="/static/images/isis_whit_732X600.png"
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              USA English Tutor Has Professional Tutors
            </h1>
            <p className="mb-8 leading-relaxed">
              Whitney and Isis are key contributors to USA English Tutor and
              were instrumental in its founding and implementing its mission.
              That mission is to bring free and low cost English language
              learning and educational materials to the world. With a
              concentration on bringing it to the poorest and most in need.
            </p>
            <div className="flex justify-center">
              <a href="/Isis'Website" rel="noopener noreferrer">
                <button className="inline-flex text-white bg-custom-crimson-ua border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
                  Teacher Isis
                </button>
              </a>
              <a href="/whitney's website" rel="noopener noreferrer">
                <button className="ml-6 inline-flex text-white bg-custom-space-cadet border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Teacher Whitney
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <main className="min-h-screen">
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-wrap -mx-4 -mb-10 text-center">
                <div className="sm:w-1/2 mb-10 px-4">
                  <div className="rounded-lg h-64 overflow-hidden">
                    <Image
                      width={732}
                      height={256}
                      alt="content"
                      className="object-cover object-center h-full w-full"
                      src="/static/images/isis_profile.png"
                    />
                  </div>
                  <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                    Isis Avry
                  </h2>
                  <p className="leading-relaxed text-base">
                    English Honors. IELTS, MCAT, UKCAT tutor.
                  </p>
                  <button className="flex mx-auto mt-6 text-white bg-custom-crimson-ua  border-0 py-2 px-5 focus:outline-none hover:bg-red-600 rounded">
                    Tutoring Services
                  </button>
                </div>
                <div className="sm:w-1/2 mb-10 px-4">
                  <div className="rounded-lg h-64 overflow-hidden">
                    <Image
                      width={732}
                      height={256}
                      alt="content"
                      className="object-cover object-center h-full w-full"
                      src="/static/images/whit_profile.png"
                    />
                  </div>
                  <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                    Whitney Womack
                  </h2>
                  <p className="leading-relaxed text-base">
                    USA Certified English Teacher. BA Education, Tefl, and 4
                    years experience tutoring.
                  </p>
                  <button className="flex mx-auto mt-6 text-white bg-custom-space-cadet border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
                    Tutoring Services
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};
export default Tutors;
