import React from "react";

import DataTable from "../../components/DataTable";
import THead from "../../components/DataTable/THead";
import TBody from "../../components/DataTable/TBody";
import Td from "../../components/DataTable/Td";
import Th from "../../components/DataTable/Th";
import CardHeader from "../../components/CardHeader";

import Form from "../Customer/components/FormField";

const customers = [
  {
    address: {
      cep: "65455-004",
      cityDTO: {
        name: "Barbalha",
        stateDTO: {
          name: "CE"
        }
      },
      neighbor: "aldeota",
      number: "33",
      street: "rua perimetral"
    },
    contact: {
      email: "fabio@gmail.com",
      primaryPhone: "859999999",
      secondaryPhone: "889999999"
    },
    cpf: "4354354453-09",
    name: "Fabio oliveira"
  },
  {
    address: {
      cep: "65455-004",
      cityDTO: {
        name: "Fortaleza",
        stateDTO: {
          name: "CE"
        }
      },
      neighbor: "Aldeota",
      number: "33",
      street: "rua perimetral"
    },
    contact: {
      email: "fabiola@gmail.com",
      primaryPhone: "859999999",
      secondaryPhone: "889999999"
    },
    cpf: "499999453-09",
    name: "Fabiola santana"
  }
];
const Customer = () => {
  return (
    <div>
      <CardHeader title="Clientes">
        <Form />
      </CardHeader>
    </div>
  );
};

export default Customer;
