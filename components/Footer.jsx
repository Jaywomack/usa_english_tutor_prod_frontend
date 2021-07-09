import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <footer className="flex justify-center  text-white bg-black w-full">
      <div className="w-full pt-6">
        <h1 className="text-center text-lg font-bold lg:text-2xl">
          Join millions of others and never miss <br></br> out on new tips,
          tutorials, and more.
        </h1>

        <div className="flex justify-center mt-6">
          <div className="bg-white rounded-lg">
            <div className="flex flex-wrap justify-between md:flex-row">
              <input
                type="email"
                className="m-1 p-2 appearance-none text-gray-700 text-sm focus:outline-none"
                placeholder="Enter your email"
              />
              <button className="w-full m-1 p-2 text-sm bg-red-600 rounded-lg font-semibold uppercase lg:w-auto">
                subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="py-6">
          <SocialIcons />
        </div>
        <div className="flex flex-col items-center justify-center pt-6 md:flex-row">
          <div className="pb-6">
            <a href="#" className=" text-xl font-bold">
              &copy;USA English Tutor 2021
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center bg-black text-white  w-full">
          <a
            className="flex items-center justify-center"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className=" ml-2"> Powered by &copy;NerdBrainz 2021</p>
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
