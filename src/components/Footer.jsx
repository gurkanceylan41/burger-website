import {
  FaInstagramSquare,
  FaTwitter,
  FaFacebook,
  FaGooglePlus,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footerContainer">
        <div className="socialIcons ">
          <Link
            to="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="i" />
          </Link>
          <Link
            to="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagramSquare className="i" />
          </Link>
          <Link
            to="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="i" />
          </Link>
          <Link
            to="https://plus.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGooglePlus className="i" />
          </Link>
          <Link
            to="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="i" />
          </Link>
        </div>
        <div className="footerNav">
          <ul>
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
            <Link>Our Team</Link>
          </ul>
        </div>
      </div>
      <div className="footerBottom">
        <p>
          &copy;2022;<span className="designer"> burger33.com</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
