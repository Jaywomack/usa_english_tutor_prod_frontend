import Meta from "../components/partials/Meta";
const Contact = () => {
  return (
    <>
      <Meta
        title="Contact | Please get in touch with us to schedule lessons for English lessons with a highly educated tutor that has an American Accent."
        desc=" We offer a range of services that can help you speak, read, listen, and write English better. We offer beginner, intermediate, and expert lessons as well as MCAT, UKCAT, and IELTS tutoring. Schedule with one of our tutors to improve your ESL learning journey. We only have tutors with neutral American accents. USA English Tutor is your path from beginner English to native fluency quickly."
      />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <main className="min-h-screen mb-24">
          <h1 className="text-7xl text-center my-16">Contact Us</h1>
          <form className="w-full max-w-lg px-6">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-first-name"
                >
                  First Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Jane"
                />
                <p className="text-red-500 text-xs italic">
                  Please fill out this field.
                </p>
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-last-name"
                >
                  Last Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Doe"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  E-mail
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="email"
                  type="email"
                />
                <p className="text-gray-600 text-xs italic">
                  Please enter a valid email.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Message
                </label>
                <textarea
                  className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                  type="text"
                  id="message"
                ></textarea>
                <p className="text-gray-600 text-xs italic">
                  Leave us a short message and we will get in contact with you
                  as soon as we can.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-full ">
                <button
                  className="shadow bg-blue-600 hover:bg-teal-400 focus:shadow-outline   text-white font-bold py-2 px-4 rounded w-full"
                  type="button"
                >
                  Send
                </button>
              </div>
            </div>
          </form>
        </main>
      </div>
    </>
  );
};
export default Contact;
