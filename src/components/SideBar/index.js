import React from "react";

const SideBar = props => {
  return (
    <nav className="col-md-2 d-none d-md-block color sidebar pt-3">
      <ul className="nav flex-column">{props.children}</ul>
    </nav>
  );
};

export default SideBar;
