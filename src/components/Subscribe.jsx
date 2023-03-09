const Subscribe = () => {
  return (
    <div className="flex flex-col text-center sm:flex-row items-center gap-3 justify-between bg-gray-600 p-6 ">
      <div>
        <h2 className="text-white text-xl font-bold">
          Subscribe To Our Newsletter
        </h2>
      </div>
      <form className="flex gap-3 m-auto sm:m-0">
        <input
          className="px-2 rounded-lg outline-none"
          type="email"
          placeholder="Enter E-mail..."
        />
        <button
          className="text-white bg-red-600 px-4 py-2 rounded-lg"
          onClick={(e) => e.preventDefault()}
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Subscribe;
