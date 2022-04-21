import React from "react";
import { Link } from "react-scroll";

export default function Header() {
  return (
    <section className="nav-section">
      <ul className="navbar">
        <li className="nav-selection">
          <Link activeClass="active" to="about" spy={true} smooth={true}>
            Betslips
          </Link>
        </li>
        <li className="nav-selection">
          <Link activeClass="active" to="projects" spy={true} smooth={true}>
            Blog
          </Link>
        </li>
        <li className="nav-selection">Account</li>
      </ul>
    </section>
  );
}
