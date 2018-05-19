import React from "react";

import DataTable from "../../components/DataTable";
import THead from "../../components/DataTable/THead";
import TBody from "../../components/DataTable/TBody";
import Td from "../../components/DataTable/Td";
import Th from "../../components/DataTable/Th";

const stocks = [
  {
    cofp: "123456",
    cst: "654321",
    name: "Aparadeira",
    ncm: "12345",
    productCode: "00001",
    productDetailsDTO: {
      buyPrice: 100,
      plotPercentage: 10,
      quantity: 30,
      sellPrice: 200
    }
  },
  {
    cofp: "123",
    cst: "653321",
    name: "Protetor solar",
    ncm: "1234f",
    productCode: "00002",
    productDetailsDTO: {
      buyPrice: 70,
      plotPercentage: 10,
      quantity: 50,
      sellPrice: 100
    }
  }
];

const Stock = props => {
  return (
    <div>
      <h2>Estoque</h2>
    <DataTable>
      <THead theme="thead-dark">
        <Th name="Codigo" />
        <Th name="Nome" />
        <Th name="Preço de compra" />
        <Th name="Preço de venda" />
        <Th name="Quantidade" />
      </THead>
      <TBody>
        {stocks.length > 0 && stocks.map(item => (
          <tr key={item.cofp}>
            <Td name={item.productCode} />
            <Td name={item.name} />
            <Td name={item.productDetailsDTO.buyPrice} />
            <Td name={item.productDetailsDTO.sellPrice} />
            <Td name={item.productDetailsDTO.quantity} />
          </tr>
        ))}
      </TBody>
    </DataTable>
    </div>
  );
};

export default Stock;
