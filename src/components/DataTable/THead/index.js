import React from "react";

const THead = props => {
  return (
    <thead>
      <tr>{props.children}</tr>
    </thead>
  );
};

export default THead;
