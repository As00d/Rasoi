import {Link} from 'react-router'
import {FaFire} from 'react-icons/fa'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-logo-container">
        <div className="navbar-logo">
          <FaFire size={26} />
          Rasoi
        </div>
      </div>
      <div className="navbar-nav-container">
        <Link to="/menu" className="navbar-nav-link">
          Menu
        </Link>
        <Link to="/services" className="navbar-nav-link">
          Services
        </Link>
        <Link to="/contact" className="navbar-nav-link">
          Contact
        </Link>
      </div>
    </div>
  )
}

export default Navbar
