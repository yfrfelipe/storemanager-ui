import React from "react";
import MenuLink from "../MenuLink";

const NavBar = props => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark cas">
        <a className="navbar-brand col-md-2" href="#">
          Empresa
        </a>
        <ul class="nav navbar-nav mr-auto">
          <MenuLink label="Home" url="/home" />
          <MenuLink label="Link" url="/link" />
        </ul>
        <ul class="nav navbar-nav">
          <MenuLink size={20} icon="bell" url="/dashbdoard" />
          <MenuLink size={20} icon="user" url="/dashboard" />
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
