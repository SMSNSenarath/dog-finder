import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    const dogLinks = this.props.dogs.map((dog) => (
      <li className="nav-item" key={dog.name}>
        <NavLink exact to={`/dogs/${dog.name}`} className="nav-link">
          {dog.name}
        </NavLink>
      </li>
    ));

    return (
      <nav className="navbar navbar-expand-lg bg-dark">
        <Link className="navbar-brand" to="/dogs">
          Dog App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span>
            <i
              className="fas fa-bars"
              aria-hidden="true"
              style={{ color: "#ff99c8" }}
            ></i>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink exact to="/dogs" id="home" className="nav-link">
                Home
              </NavLink>
            </li>
            {dogLinks}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
