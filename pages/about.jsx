import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <main className="min-h-screen mb-24">
        <h1 className="text-7xl text-center mt-12 mb-24  border-b-2 pb-10">
          About
        </h1>
        <div className="flex flex-wrap overflow-hidden">
          <div className="w-full overflow-hidden lg:w-1/2 flex justify-end rounded ">
            <img
              src="https://images.unsplash.com/photo-1550155864-3033f844da36?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGNvdXBsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <div className="w-full overflow-hidden lg:w-1/2">
            <div className="md:w-1/2 md:ml-12">
              <h3 className="text-5xl mb-16 text-center mt-6 lg:mt-0">
                Jay & Whitney{" "}
              </h3>
              <p className="text-gray-600 text-2xl mb-12">
                Jay and Whitney are professionals with a passion for Teaching
                English. Jay is a Software Engineer and Whitney is an American
                Grade School Teacher. They both share a dream of bringing
                accessible and affordable english lessons to the world.
              </p>
              <p className="text-gray-600 text-2xl mb-12">
                The Long term vision of USA English Tutor will be to bring
                American English to the entire world with accessability for
                everyone. Starting with free tiers at all levels and moving
                towards a paid service for those that really want to take their
                learning to the next level.
              </p>
              <p className="text-gray-600 text-2xl mb-12">
                If you are reading this, we want to thank you for being a part
                of our company and helping to make us better. Feel free to go to
                our{" "}
                <Link href="/contact">
                  <span className="font-bold underline cursor-pointer">
                    {" "}
                    contact page
                  </span>
                </Link>{" "}
                and send us a message
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default About;
