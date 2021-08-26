const Ticker = () => {
  return (
    <>
      <section className="text-white bg-custom-crimson-ua body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="text-white title-font font-medium sm:text-4xl text-3xl">
                3,000,000 +
              </h2>
              <p className="text-white leading-relaxed uppercase">learners</p>
            </div>
            <div className="text-white p-4 sm:w-1/4 w-1/2">
              <h2 className="text-white title-font font-medium sm:text-4xl text-3xl">
                100+
              </h2>
              <p className="text-white leading-relaxed uppercase">lessons</p>
            </div>
            <div className="text-white p-4 sm:w-1/4 w-1/2">
              <h2 className="text-white title-font font-medium sm:text-4xl text-3xl">
                5,000,000
              </h2>
              <p className="text-white leading-relaxed uppercase">
                subscribers
              </p>
            </div>
            <div className="text-white p-4 sm:w-1/4 w-1/2">
              <h2 className="text-white title-font font-medium sm:text-4xl text-3xl">
                10
              </h2>
              <p className="text-white leading-relaxed upepercase">
                expert tutors
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Ticker;
