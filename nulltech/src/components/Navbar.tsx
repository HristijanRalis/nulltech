import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleToggle = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <div className="Navbar d-flex justify-content-between align-items-center">
      <div className="LOGO">
        <img src="/images/LOGO/nullTech.png" alt="logo" />
      </div>
      <nav className="Navigation">
        <ul className="navigationList">
          <li>
            <Link to="/" className="listItem">
              Home
            </Link>
          </li>
          <li>
            <Link to="/aboutUs" className="listItem">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/services" className="listItem">
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" className="listItem">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <div className="HAMBURGER" onClick={handleToggle}>
        <FontAwesomeIcon
          icon={openMenu ? faTimes : faBars}
          size="lg"
          className="hamburgerIcon"
        />
      </div>

      <div className={`hamburgerMenu ${openMenu ? "showMenu" : ""}`}>
        <ul className="hamburgerNavigationList">
          <li>
            <Link
              to="/"
              className="hamburgerListItem"
              onClick={() => setOpenMenu(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/aboutUs"
              className="hamburgerListItem"
              onClick={() => setOpenMenu(false)}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="hamburgerListItem"
              onClick={() => setOpenMenu(false)}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hamburgerListItem"
              onClick={() => setOpenMenu(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
