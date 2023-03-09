import { Link } from "react-router-dom";
import logo from "../assets/images/clarusway_logo.png";
const Footer = () => {
  return (
    <div className="bg-gray-600 flex flex-col justify-center items-center gap-1 py-2 ">
      <p className="text-white text-lg">
        Clarusway Web Design, Copyright © {new Date().getFullYear()}
      </p>
      <Link to={"http://www.clarusway.com/"} target="_blank">
        <img src={logo} alt="logo" />
      </Link>
    </div>
  );
};

export default Footer;
