import Link from "next/link";
import { useState } from "react";
import Head from "next/head";
import SocialIcons from "./SocialIcons";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <Head>
        <title>USA English Tutor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="flex items-center flex-wrap bg-black p-3 w-screen">
        <Link href="/">
          <a className="inline-flex items-center p-2 mr-4 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 mx-3 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>
            <span className="md:text-xl text-white font-bold uppercase tracking-wide">
              <span className="text-red-600 hover:text-blue-500">USA</span>{" "}
              <span className="text-white  ">English</span>{" "}
              <span className="text-blue-500 hover:text-red-500 ">Tutor</span>
            </span>
          </a>
        </Link>
        <button
          className=" inline-flex p-3  rounded lg:hidden text-white ml-auto hover:text-white outline-none"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <div
          className={`${
            active ? "" : "hidden"
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto md:mr-12">
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-red-600 hover:text-white ">
                Home
              </a>
            </Link>
            <Link href="/services">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-white hover:text-black">
                Services
              </a>
            </Link>
            <Link href="/about">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-blue-600 hover:text-white">
                About us
              </a>
            </Link>

            <Link href="/lessons">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-red-600 hover:text-white">
                Lessons
              </a>
            </Link>
            <Link href="/contact">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-white hover:text-black">
                Contact us
              </a>
            </Link>
            <Link href="/tutors">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-blue-600 hover:text-white">
                Tutors
              </a>
            </Link>
          </div>
          <SocialIcons />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
