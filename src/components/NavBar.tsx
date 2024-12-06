import { useState } from "react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const navItems = (
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/public-board">Public Board</a></li>
      <li><a href="/freedom-board">Note</a></li>
      <li><a href="/about">About</a></li>
    </ul>
  );

  return (
    <nav className="navigation_area">
      <div className="container">
        {/* Desktop Navigation */}
        <div className="nav_con">{navItems}</div>

        {/* Hamburger Menu */}
        <div className="hamburger-menu">
          <button
            className="hamburger-btn"
            onClick={toggleMenu}
            aria-label="Toggle Navigation Menu"
          >
            ☰
          </button>
          <div className={`nav_res ${menuOpen ? "open" : ""}`}>{navItems}</div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
