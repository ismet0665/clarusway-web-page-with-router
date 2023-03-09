import Card from "../components/Card";
import Subscribe from "../components/Subscribe";

const Home = () => {
  return (
    <div>
      <div className="w-full h-[40vh] image flex justify-center flex-col text-center text-white gap-4 px-10 ">
        <h1 className="font-bold text-xl sm:text-2xl md:text-4xl lg:text-6xl">
          Professional Web Design
        </h1>
        <p>
          Professional web design involves creating visually appealing,
          user-friendly websites that meet the needs and goals of the client and
          their target audience.
        </p>
      </div>

      <Subscribe />
      <Card/>
    </div>
  );
};

export default Home;
