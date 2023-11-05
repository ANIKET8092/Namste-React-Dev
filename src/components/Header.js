import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";
const Header = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const handleClick = () => {
    setLoggedIn((prev) => !prev);
  };
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="A Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button className="login" onClick={handleClick}>
            {loggedIn ? "Login" : "Logout"}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
