import React from "react";

const NavBar = props => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark cas">
        <a className="navbar-brand">Y - Comercial</a>
        <button type="button" class="btn btn-light">Light</button>
        <ul class="nav navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
        </ul>
        <ul class="nav navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">Link on the Right</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
