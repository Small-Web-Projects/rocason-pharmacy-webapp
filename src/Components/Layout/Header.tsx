import '../Layout/header.css';
import Logo from '../../assets/logo.png';
import { FaPhone } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar">
      <NavLink to="/">
        <img src={Logo} alt="rocason-logo" />
      </NavLink>

      <ul className="nav-list">
        <li>
          <NavLink to="/about">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/service">Services</NavLink>
        </li>
        <li>
          <NavLink to="/product">Products</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact Us</NavLink>
        </li>

        <span className="header-contact">
          <FaPhone />
          <a href="tel:01623 590463">+234 803 856 9395</a>
        </span>
      </ul>
    </nav>
  );
};

export default Header;
