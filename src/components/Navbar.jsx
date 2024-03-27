import React from "react";
import logo from "../assets/DataLoom.png";
import user from "../assets/user.jpeg";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="deepvue" className="navbar_main_logo" />
      <input type="text" placeholder="search" />
      <div className="navbar_user_info">
        <img src={user} alt="user" className="navbar_user" />
        <p>Soham</p>
      </div>
    </div>
  );
};

export default Navbar;
