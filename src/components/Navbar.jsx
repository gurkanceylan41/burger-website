import { Link } from "react-router-dom";
import Logo from "../assets/hamburgerlogo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="leftSide">
        <Link to={"/"}>
          <img src={Logo} />
        </Link>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
