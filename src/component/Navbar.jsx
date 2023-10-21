import React, { useState } from "react";

const Navbar = () => {
  const [hamburger, SetHamburger] = useState("");
  const hamburger_fun = () => {
    if (hamburger === "active") {
      SetHamburger("");
    } else {
      SetHamburger("active");
    }
  };
  return (
    <div id="navbar">
      <h1 id="logo">logo</h1>
      <div id="nav_link_container">
        <div id="nav_menu_container" className={hamburger}>
          <a href="/" className="nav_menu">
            home
          </a>
          <a href="/" className="nav_menu">
            product
          </a>
          <a href="/" className="nav_menu">
            promo
          </a>
          <a href="/" className="nav_menu">
            about
          </a>
          <a href="/" className="nav_menu">
            contact
          </a>
        </div>
        <form action="" id="nav_search_container">
          <input type="search" name="" id="nav_search_input" title="search" />
          <div className="search_logo">Q</div>
          <div
            id="hamburger_container"
            className={hamburger}
            onClick={hamburger_fun}
          >
            <div id="hamburger"></div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Navbar;
