import React from "react";

const MenuItem = ({name}) => {
  return (
      <li class="nav-item">
        <a class="nav-link active" href="#">
          {name} <span class="sr-only">(current)</span>
        </a>
      </li>
  );
};

export default MenuItem;
