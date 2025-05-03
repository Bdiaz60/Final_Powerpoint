import { Link } from "react-router-dom";
import TimeDisplay from "./TimeDisplay";
import "../styles.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-left">
          <Link className="logo" to="/">
            <img src="/yurr.webp" alt="Logo" className="logo-img" />
          </Link>
          <TimeDisplay />
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/order">Order</Link>
          <Link to="/register">Register</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/login">Log In</Link>
          <Link to="/about">About Us</Link>
        </div>
      </div>
    </nav>
  );
}
