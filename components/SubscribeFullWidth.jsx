const SubscribeFullWidth = () => {
  return (
    <>
      <div className="bg-custom-up-maroon text-white flex flex-col items-center h-96 justify-center">
        <h2 className="text-4xl font-light text-center pb-7">
          Get updates on new courses.
        </h2>
        <input
          className="w-5/6 md:w-1/4 py-4 rounded text-center"
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
        />
        <button className="mt-7 text-xl border border-white px-5 py-3">
          Subscribe
        </button>
      </div>
    </>
  );
};

export default SubscribeFullWidth;
