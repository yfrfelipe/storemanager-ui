import React from "react";
import Card from "../../../../components/Cards";

class DashBoard extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <Card title="Fornecedores" quantity="80" />
          <Card title="Clientes" quantity="200" />
          <Card title="Estoques" quantity="500" />
        </div>
      </div>
    );
  }
}

export default DashBoard;
