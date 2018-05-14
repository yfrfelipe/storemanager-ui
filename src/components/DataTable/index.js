import React from "react";

const DataTable = props => {
  return (
    <div>
      <table className="table">{props.children}</table>
    </div>
  );
};

export default DataTable;
