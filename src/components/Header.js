import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <div className="logo"></div>
      <nav className="nav-options">
        <Link to={"/"} className="link nav-option">
          Home
        </Link>
        <Link to={"/about"} className="link nav-option">
          About
        </Link>
        <Link to={"/services"} className="link nav-option">
          Services
        </Link>
        <Link to={"/portfolio"} className="link nav-option">
          Portfolio
        </Link>
        <Link to={"/code-rhythm"} className="link nav-option">
          CodeRhythm
        </Link>
        <Link to={"/products"} className="link nav-option">
          products
        </Link>
        <Link to={"/collaboration"} className="link nav-option">
          collaboration
        </Link>
        <Link to={"/partnerships"} className="link nav-option">
          partnerships
        </Link>
        <Link to={"/testimonials"} className="link nav-option">
          testimonials
        </Link>
        <Link to={"/blog"} className="link nav-option">
          blog
        </Link>
        <Link to={"/career"} className="link nav-option">
          career
        </Link>
        <Link to={"/legal"} className="link nav-option">
          legal
        </Link>
        <Link to={"/faq"} className="link nav-option">
          faq
        </Link>
        <Link to={"/contact"} className="link nav-option">
          contact
        </Link>
      </nav>
    </div>
  );
}
