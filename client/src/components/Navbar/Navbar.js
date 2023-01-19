import React from "react";
import "./navbar.css";
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <nav className="navbar-main">
      <ul>
        
          <li className="nav-item">
          <Link to="home" spy={true} smooth={true} offset={-100} duration={100}>
            Home
          </Link>
          </li>
        
        <li className="nav-item"><Link to="about" spy={true} smooth={true} offset={-100} duration={100}>
            About
          </Link></li>

        <li className="nav-item"><Link to="service" spy={true} smooth={true} offset={-100} duration={100}>
            Service
          </Link></li>

        <li className="nav-item"><Link to="career" spy={true} smooth={true} offset={-100} duration={100}>
            Career
          </Link></li>

        <li className="nav-item"><Link to="video" spy={true} smooth={true} offset={-100} duration={100}>
            Video
          </Link></li>

        <li className="nav-item"><Link to="team" spy={true} smooth={true} offset={-100} duration={100}>
            Team
          </Link></li>

        <li className="nav-item"><Link to="testmonial" spy={true} smooth={true} offset={-100} duration={100}>
        Testmonial
          </Link></li>

        <li className="nav-item">Feedback</li>

        <li className="nav-item">Contact</li>

        <li className="nav-item"><Link to="subscription" spy={true} smooth={true} offset={-100} duration={100}>
        Subscription
          </Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
