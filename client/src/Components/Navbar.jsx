import { useState } from "react";
import "../Assets/CSS/Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

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
            <p className="navLink" onClick={() => navigate("/dashboard")}>
              Home
            </p>
          </li>
          <li onClick={removeActive}>
            <p className="navLink" onClick={() => navigate("/sessions")}>
              Sessions
            </p>
          </li>
          <li onClick={removeActive}>
            <p className="navLink">Contact</p>
          </li>
          <li onClick={removeActive}>
            <p className="navLink" onClick={() => navigate("/profile")}>
              Profile
            </p>
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
