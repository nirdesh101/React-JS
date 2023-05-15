import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark bg-gradient">
      <div className="container">
        <h1>
          <NavLink
            className="navbar-brand fs-2 text-light fw-semibold me-5"
            href="#"
            to="/"
          >
            MIT UNIVERSITY
          </NavLink>
        </h1>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink
              to="/userlist"
              className="fs-5 ms-5 fw-semibold user-data text-decoration-underline"
              href="#"
            >
              ALL USERS DATA
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
