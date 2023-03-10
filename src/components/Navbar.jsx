import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="flex flex-col justify-between text-center gap-3 p-6 bg-gray-600 border-b-4 border-purple-500 items-center sm:flex-row">
      <div>
        <Link to={"/"}>
          <h1 className="text-white text-2xl font-bold hover:text-purple-500 duration-300">
            Clarusway It School Web Design
          </h1>
        </Link>
      </div>
      <nav>
        <ul className="flex gap-4 text-white font-bold">
          <li className="hover:text-purple-500 duration-300">
            <NavLink to="/">HOME</NavLink>
          </li>
          <li className="hover:text-purple-500 duration-300">
            <NavLink to="/about">ABOUT</NavLink>
          </li>
          <li className="hover:text-purple-500 duration-300">
            <NavLink to="/services">SERVİCES</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
