import { useState } from "react";
import"../Assets/CSS/Navbar.css";

function Navbar() {
  // adding the states
  const [isActive, setIsActive] = useState(false);
  //add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };
  //clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false);
  };
  return (
    <div className="App">
      <nav className="navbar">
        {/* logo */}
        <a href="#home" className="navLogo">
          Healthify{" "}
        </a>
        <ul className={`navMenu ${isActive ? "active" : ""}`}>
          <li onClick={removeActive}>
            <a href="#home" className="navLink">
              Home
            </a>
          </li>
          <li onClick={removeActive}>
            <a href="#home" className="navLink">
              Catalog
            </a>
          </li>
          <li onClick={removeActive}>
            <a href="#home" className="navLink">
              All products
            </a>
          </li>
          <li onClick={removeActive}>
            <a href="#home" className="navLink">
              Contact
            </a>
          </li>
        </ul>
        <div
          className={`hamburger ${isActive ? "active" : ""}`}
          onClick={toggleActiveClass}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
