import React from "react";
import { NavLink } from "react-router-dom";
import Icon from "./Icon";

const MenuItem = props => {
  return (
    <li className="nav-item">
      <NavLink
        className="nav-link"
        activeClassName="active"
        to={props.url}
        exact
      >
        <Icon size={props.size} icon={props.icon} /> {props.label}
      </NavLink>
    </li>
  );
};

export default MenuItem;
