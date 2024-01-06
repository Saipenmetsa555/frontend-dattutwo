import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  const burger = () => {
    setExpandNavbar((prevState) => !prevState);
    console.log(expandNavbar);
  };

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button onClick={burger} className="toggle">
          <img
            className="icon"
            src="https://cdn-icons-png.flaticon.com/512/1237/1237838.png"
            alt="icon"
          />
        </button>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/project">Projects</Link>
        <Link to="/experience">Experience</Link>
      </div>
    </div>
  );
}

export default Navbar;
