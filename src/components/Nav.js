import React, { useState, useEffect } from "react";
import "../styles/nav.scss";
const Nav = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        handleShow(true);
      } else handleShow(false);
    });
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <h1 className="nav_logo">movie.db</h1>

      <img
        className="nav__profile"
        src="https://yt3.ggpht.com/yti/APfAmoG9d8SMXfgJngNZ7nwmONhCSHwIKq6U6q31kyissk4=s88-c-k-c0x00ffffff-no-rj-mo"
        alt="logo"
      />
    </div>
  );
};

export default Nav;
