import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useRef } from "react";
import { NavButton } from "./NavButton";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  let scrollCount = useRef(0);

  // Show navbar only after scrolling 100px
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY < 100) {
        scrollCount.current = 0;
        setIsVisible(false);
        return;
      }

      if (scrollY > 100) {
        scrollCount.current += 1;
      }

      if (scrollCount.current >= 3) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false); // close mobile menu when link clicked
  };

  return (
    <div
      className={`Navbar d-flex justify-content-between align-items-center ${
        isVisible ? "visible" : "hidden"
      }`}
    >
      {/* LOGO */}
      <div className="LOGO">
        <img src="/images/LOGO/nullTech.png" alt="logo" />
      </div>

      {/* NAVIGATION LINKS */}
      <nav className="Navigation">
        <ul className="navigationList">
          {[
            { label: "Home", id: "home" },
            { label: "About Us", id: "aboutUs" },
            { label: "Services", id: "services" },
            { label: "Contacts", id: "contact" },
          ].map((link) => (
            <li key={link.id}>
              <NavButton
                label={link.label}
                sectionId={link.id}
                onClick={scrollToSection}
                className="listItem"
              />
            </li>
          ))}
        </ul>
      </nav>

      {/* HAMBURGER ICON */}
      <div className="HAMBURGER" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <FontAwesomeIcon
          icon={isMenuOpen ? faTimes : faBars}
          size="lg"
          className="hamburgerIcon"
        />
      </div>

      {/* MOBILE MENU */}
      <div className={`hamburgerMenu ${isMenuOpen ? "showMenu" : ""}`}>
        <ul className="hamburgerNavigationList">
          {[
            { label: "Home", id: "home" },
            { label: "About Us", id: "aboutUs" },
            { label: "Services", id: "services" },
            { label: "Contacts", id: "contact" },
          ].map((link) => (
            <li key={link.id}>
              <NavButton
                label={link.label}
                sectionId={link.id}
                onClick={scrollToSection}
                className="hamburgerListItem"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
