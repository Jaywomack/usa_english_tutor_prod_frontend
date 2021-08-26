const Tutors = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src="/static/images/isis_whit_732X600.png"
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Microdosing synth tattooed vexillologist
            </h1>
            <p className="mb-8 leading-relaxed">
              Meggings kinfolk echo park stumptown DIY, kale chips beard
              jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice
              godard disrupt ramps hexagon mustache umami snackwave tilde
              chillwave ugh. Pour-over meditation PBR&B pickled ennui celiac
              mlkshk freegan photo booth af fingerstache pitchfork.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Button
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Button
              </button>
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
                    <img
                      alt="content"
                      className="object-cover object-center h-full w-full"
                      src="/static/images/isis_profile.png"
                    />
                  </div>
                  <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                    Isis Avry
                  </h2>
                  <p className="leading-relaxed text-base">
                    Likes grey labs, her brother kaleb, lifting weights and
                    getting dates. Is probably stronger than you
                  </p>
                  <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
                    Tutoring Services
                  </button>
                </div>
                <div className="sm:w-1/2 mb-10 px-4">
                  <div className="rounded-lg h-64 overflow-hidden">
                    <img
                      alt="content"
                      className="object-cover object-center h-full w-full"
                      src="/static/images/pretty_brunette.png"
                    />
                  </div>
                  <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                    Whitney Womack
                  </h2>
                  <p className="leading-relaxed text-base">
                    USA Certified English Teacher. BA Education, Tefl, and 4
                    years experience tutoring.
                  </p>
                  <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
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
