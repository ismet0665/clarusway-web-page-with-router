import html from "../assets/images/logo_html.png";
import css from "../assets/images/logo_css.png";
import brush from "../assets/images/logo_brush.png";
import { Link } from "react-router-dom";
const Card = () => {
  return (
    <div className="text-center flex flex-col gap-2 sm:flex-row">
      <div className="card py-8 text-center w-full sm:w-1/3">
        <Link to="/html">
          <img src={html} alt="html" className="m-auto w-1/3" />
        </Link>
        <h3 className="font-bold">HTML5 Markup</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur rerum
          quam numquam officiis quaerat vero expedita, dolor eaque voluptatem
          doloremque a distinctio in harum sint ad similique ratione pariatur
          beatae.
        </p>
      </div>
      <div className="card py-8 text-center w-full sm:w-1/3">
        <Link to={"/css"}>
          <img src={css} alt="html" className="m-auto w-1/3" />
        </Link>
        <h3 className="font-bold">CSS3 Styling</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur rerum
          quam numquam officiis quaerat vero expedita, dolor eaque voluptatem
          doloremque a distinctio in harum sint ad similique ratione pariatur
          beatae.
        </p>
      </div>
      <div className="card py-8 text-center w-full sm:w-1/3">
        <Link to={"/logo"}>
          <img src={brush} alt="html" className="m-auto w-1/3" />
        </Link>
        <h3 className="font-bold">Graphic Design</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur rerum
          quam numquam officiis quaerat vero expedita, dolor eaque voluptatem
          doloremque a distinctio in harum sint ad similique ratione pariatur
          beatae.
        </p>
      </div>
    </div>
  );
};

export default Card;
