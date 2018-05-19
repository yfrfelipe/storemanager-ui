import React from "react";

const DataTable = props => {
  return (
    <div>
      <table className="table table-borderless">{props.children}</table>
    </div>
  );
};

export default DataTable;
