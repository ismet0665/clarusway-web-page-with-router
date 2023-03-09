import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="flex flex-col justify-between text-center gap-3 p-6 bg-gray-600 border-b-4 border-purple-500 items-center sm:flex-row">
      <div>
        <h1 className="text-white text-2xl font-bold">
          <span>Clarusway It School </span> Web Design
        </h1>
      </div>
      <nav>
        <ul className="flex gap-4 text-white font-bold">
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/about">ABOUT</NavLink>
          </li>
          <li>
            <NavLink to="/services">SERVİCES</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
