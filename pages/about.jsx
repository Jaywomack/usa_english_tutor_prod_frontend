import Link from "next/link";
import Image from "next/image";
import Meta from "../components/partials/Meta";
const About = () => {
  return (
    <>
      <Meta
        title="About | We are a family of Educators seeking to help English language learners"
        desc=" We offer a range of services that can help you speak, read, listen, and write English better. We offer beginner, intermediate, and expert lessons as well as MCAT, UKCAT, and IELTS tutoring. Schedule with one of our tutors to improve your ESL learning journey. We only have tutors with neutral American accents. USA English Tutor is your path from beginner English to native fluency quickly."
      />
      <div className="flex flex-col items-center justify-center min-h-screen pb-24">
        <main className="min-h-screen mb-24">
          <h1 className="text-7xl text-center mt-12 mb-24  border-b-2 pb-10">
            About USA English Tutor
          </h1>
          <h3 className="text-5xl mb-16 text-center mt-6 lg:mt-0">
            Isis & Whitney & Jay
          </h3>
          <div className="flex flex-wrap overflow-hidden items-center">
            <div className="w-full overflow-hidden lg:w-1/2 flex justify-end rounded ">
              <Image
                width={732}
                height={600}
                src="/static/images/isis_whit_732X600.png"
                alt=""
              />
            </div>
            <div className="w-full overflow-hidden lg:w-1/2 text-start">
              <div className="md:w-1/2 md:ml-12">
                <h4 className="text-gray-900 text-3xl mb-2 lg:mb-5">
                  We are a family of educators
                </h4>
                <p className="text-gray-600 text-2xl mb-2">
                  Isis an an advanced English student with English honors
                  recognition and med-school student.
                </p>
                <p className="text-gray-600 text-2xl mb-2">
                  Whitney a TEFL certified, TESOL certified and Washington State
                  Certified ESL Teacher.
                </p>
                <p className="text-gray-600 text-2xl mb-2">
                  Jay a Software Engineer and
                </p>
                <p className="text-gray-600 text-2xl mb-2">
                  The Long term vision of USA English Tutor will be to bring
                  American English to the entire world with accessability for
                  everyone. Starting with free tiers at all levels and moving
                  towards a paid service for those that really want to take
                  their learning to the next level.
                </p>
                <Link href="/tutors">
                  <button class="flex mx-auto mt-16 text-white bg-custom-crimson-ua border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg ">
                    Tutoring Services
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
export default About;
