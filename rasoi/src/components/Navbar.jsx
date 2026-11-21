import { Link } from "react-router";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <Link to="/menu">Menu</Link>
      <Link to="/services">Services</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};

export default Navbar;
