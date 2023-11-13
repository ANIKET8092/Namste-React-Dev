import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { LOGO_URL } from "../utils/constant";
import { UserContext } from "../utils/userContext";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const data = useContext(UserContext);
  const [loggedIn, setLoggedIn] = useState(true);
  const handleClick = () => {
    setLoggedIn((prev) => !prev);
  };

  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL} alt="A Logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex m-4 p-4">
          <li className="p-4">Onliine Status : {onlineStatus ? "✅" : "🛑"}</li>
          <li className="p-4">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4">
            <Link to="/grocery">grocery</Link>
          </li>
          <li className="p-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="p-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="p-4">Cart</li>
          <button className="login" onClick={handleClick}>
            {loggedIn ? "Login" : "Logout"}
          </button>
          <li className="p-4">{data.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
