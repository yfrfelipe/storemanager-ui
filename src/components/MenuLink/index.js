import React from "react";
import { NavLink } from "react-router-dom";
import Icon from "../Icon";

const MenuLink = props => {
  return (
    <li className="nav-item">
      <NavLink
        className="nav-link"
        //activeClassName="active"
        to={props.url}
        exact
      >
        {props.size &&
          props.icon && <Icon size={props.size} icon={props.icon} />}
        {props.label && <span className="pl-2">{props.label}</span>}
      </NavLink>
    </li>
  );
};

export default MenuLink;
