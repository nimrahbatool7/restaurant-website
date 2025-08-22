import { useState } from "react";
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">🍽 My Restaurant</h1>

        {/* Burger Menu Button */}
        <div
          className={`burger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation Links */}
        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#specials">Specials</a>
          <a href="#reservations">Book</a>
          <a href="#reviews">Reviews</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
