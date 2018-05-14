import React from 'react';

const Icon = (props) => {
  const GetIcon = require(`react-feather/dist/icons/${props.icon}`).default;
  return (
    <GetIcon size={props.size} className={`feather feather-${props.icon}`} />
  );
};

export default Icon;
