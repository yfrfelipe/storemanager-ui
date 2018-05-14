import React from "react";

const SideBarMenu = props => {
  return (
      <nav className="col-md-2 d-none d-md-block bg-light sidebar">
        <div className="sidebar-sticky">
          <ul className="nav flex-column">{props.children}</ul>
        </div>
      </nav>
  );
};

export default SideBarMenu;
