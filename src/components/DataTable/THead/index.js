import React from "react";

const THead = props => {
  return (
    <thead className="thead-light">
      <tr>{props.children}</tr>
    </thead>
  );
};

export default THead;
