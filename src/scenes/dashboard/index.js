import React from "react";
import Card from "../../components/Cards";

const DashBoard = props => {
  return (
    <div className="row">
      <Card title="Fornecedores" quantity="80"/>
      <Card title="Clientes" quantity="200"/>
      <Card title="Estoques" quantity="500"/>
    </div>
  );
};

export default DashBoard;
