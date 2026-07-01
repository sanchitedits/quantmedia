import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <div className="navbar navbar-expand-lg">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <h2>Quant Media</h2>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-align-justify"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className={`nav-item ${isActive("/")}`}>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className={`nav-item ${isActive("/mechanism")}`}>
              <Link className="nav-link" to="/mechanism">
                Mechanism
              </Link>
            </li>
            <li className={`nav-item ${isActive("/pipeline")}`}>
              <Link className="nav-link" to="/pipeline">
                Pipeline
              </Link>
            </li>
            <li className={`nav-item ${isActive("/services")}`}>
              <Link className="nav-link" to="/services">
                Services
              </Link>
            </li>
            <li className={`nav-item ${isActive("/portfolio")}`}>
              <Link className="nav-link" to="/portfolio">
                Portfolio
              </Link>
            </li>
            <li className={`nav-item ${isActive("/advantage")}`}>
              <Link className="nav-link" to="/advantage">
                Advantage
              </Link>
            </li>
            <li className={`nav-item ${isActive("/pricing")}`}>
              <Link className="nav-link" to="/pricing">
                Pricing
              </Link>
            </li>
            <li className={`nav-item ${isActive("/contact")}`}>
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
