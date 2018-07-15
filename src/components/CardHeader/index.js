import React from "react";
import PropTypes from "prop-types";

const CardHeader = props => {
  return (
    <section className="card">
      <div className="card-header bg-transparent txt">{props.title}</div>
      {props.children}
    </section>
  );
};

CardHeader.propTypes = {
  title: PropTypes.string
};

export default CardHeader;
