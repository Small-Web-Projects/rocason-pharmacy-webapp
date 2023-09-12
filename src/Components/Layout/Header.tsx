import '../Layout/header.css';
import Logo from '../../assets/logo.png';
import { FaPhone } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { IoMdMenu } from 'react-icons/io';
// import { MdOutlineClose } from 'react-icons/md';
import CloseBtn from '../../assets/home/close.png';
import { useState } from 'react';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const removeOpen = () => {
    setIsNavOpen(false);
  };
  return (
    <nav className="navbar">
      <NavLink to="/">
        <img src={Logo} alt="rocason-logo" />
      </NavLink>
      <div className="nav-links">
        <ul className="desktop-nav">
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
        </ul>

        <span className="header-contact">
          <FaPhone />
          <a href="tel:01623 590463">+234 803 856 9395</a>
        </span>
      </div>

      <div
        className="mobile-menu"
        onClick={() => setIsNavOpen((prev) => !prev)}
      >
        <IoMdMenu className="hamburger" />
      </div>

      <div className={isNavOpen ? 'show-menu' : 'hide-menu'}>
        <div className="close-btn" onClick={() => setIsNavOpen(false)}>
          <img src={CloseBtn} alt="" className="close" />
        </div>
        <ul className="mobile-nav">
          <NavLink to="/">
            <li onClick={removeOpen}>Home</li>
          </NavLink>
          <NavLink to="/about">
            <li onClick={removeOpen}>About Us</li>
          </NavLink>
          <NavLink to="/service">
            <li onClick={removeOpen}>Services</li>
          </NavLink>
          <NavLink to="/product">
            <li onClick={removeOpen}>Products</li>
          </NavLink>
          <NavLink to="/contact">
            <li onClick={removeOpen}>Contact Us</li>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
