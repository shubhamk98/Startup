import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navBar">
      <div>
        <p className="logo">VenturesInsider</p>
      </div>
      <div className="sidebtn">
        <p>List Startup</p>
        <p>About</p>
      </div>
    </div>
  );
};

export default NavBar;
