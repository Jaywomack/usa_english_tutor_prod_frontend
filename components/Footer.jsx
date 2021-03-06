const Footer = () => {
  return (
    <footer className="text-white body-font bg-custom-eerie-black">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
          <div className="lg:w-1/6 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3 uppercase">
              Beginner Subjects
            </h2>
            <nav className="list-none mb-10">
              <ul>
                <li>
                  <a className="text-white hover:text-white">School</a>
                </li>
                <li>
                  <a className="text-white hover:text-white">Shopping</a>
                </li>
                <li>
                  <a className="text-white hover:text-white">Cooking</a>
                </li>
                <li>
                  <a className="text-white hover:text-white">Pets</a>
                </li>
                <li>
                  <a className="text-white hover:text-white">Travel</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="lg:w-1/6 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3 uppercase">
              Intermediate Subjects
            </h2>
            <nav className="list-none mb-10">
              <ul>
                <li>
                  <a className="text-white hover:text-white">Career</a>
                </li>
                <li>
                  <a className="text-white hover:text-white">Advertising</a>
                </li>
                <li>
                  <a className="text-white hover:text-white">Hobbies</a>
                </li>
                <li>
                  <a className="text-white hover:text-white">Annoyances</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="lg:w-1/6 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3 uppercase">
              Advanced Subjects
            </h2>
            <nav className="list-none mb-10">
              <ul>
                <li>
                  <a className="text-white hover:text-white">
                    Vacation & Travel
                  </a>
                </li>
                <li>
                  <a className="text-white hover:text-white">
                    Creative Journalism
                  </a>
                </li>
                <li>
                  <a className="text-white hover:text-white">
                    Planning Holidays
                  </a>
                </li>
                <li>
                  <a className="text-white hover:text-white">Itineraries</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="lg:w-1/6 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3 uppercase">
              Expert Subjects
            </h2>
            <nav className="list-none mb-10">
              <ul>
                <li>
                  <a className="text-white hover:text-white">The Environment</a>
                </li>
                <li>
                  <a className="text-white hover:text-white">Health</a>
                </li>
                <li>
                  <a className="text-white hover:text-white">Technology</a>
                </li>
                <li>
                  <a className="text-white hover:text-white">Crime</a>
                </li>
                <li>
                  <a className="text-white hover:text-white">
                    International Affairs
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="lg:w-1/6 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3 uppercase">
              Medical School Prep
            </h2>
            <nav className="list-none mb-10">
              <ul>
                <li>
                  <a className="text-white hover:text-white">MCAT</a>
                </li>
                <li>
                  <a className="text-white hover:text-white">UKCAT</a>
                </li>
                <li>
                  <a className="text-white hover:text-white">DAT</a>
                </li>
                <li>
                  <a className="text-white hover:text-white">GRE</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="lg:w-1/6 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3 uppercase">
              Language Test Prep
            </h2>
            <nav className="list-none mb-10">
              <ul>
                <li>
                  <a className="text-white hover:text-white">IELTS-TEST</a>
                </li>
                <li>
                  <a className="text-white hover:text-white">TOEFL-TEST</a>
                </li>
                <li>
                  <a className="text-white hover:text-white">GMAT-TEST</a>
                </li>
                <li>
                  <a className="text-white hover:text-white">GRE-TEST</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="border-t border-white">
        <div className="container px-5 py-8 flex flex-wrap mx-auto items-center">
          <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
            <div className="relative sm:w-64 w-40 sm:mr-4 mr-2">
              <label
                htmlFor="footer-field"
                className="leading-7 text-sm text-white"
              >
                Subscibe To Our Newsletter
              </label>
              <input
                type="text"
                id="footer-field"
                name="footer-field"
                className="w-full bg-white bg-opacity-50 rounded border border-white focus:ring-2 focus:bg-transparent focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button className="inline-flex text-white bg-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
              Subscribe
            </button>
          </div>
          <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
            <a className="text-white">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-white">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-white">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-white">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
      <div>
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-white text-sm text-center sm:text-left">
            ?? 2020 USA English Tutor
          </p>
          <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-white text-sm">
            All of our orginal work and logos are trademarked and we reserve the
            right to all licensing of our products
          </span>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
