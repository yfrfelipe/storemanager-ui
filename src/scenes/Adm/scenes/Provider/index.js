import React from "react";
import DataTable from "../../../../components/DataTable";
import THead from "../../../../components/DataTable/THead";
import TBody from "../../../../components/DataTable/TBody";
import Td from "../../../../components/DataTable/Td";
import Th from "../../../../components/DataTable/Th";
import CardHeader from "../../../../components/CardHeader";
import Form from "./components/Form"
  
const providers = [
  {
    address: {
      cep: "60843-000",
      cityDTO: {
        name: "Fortaleza",
        stateDTO: {
          name: "Ce"
        }
      },
      neighbor: "Guajiru",
      number: "190",
      street: "Rua socorro gomes"
    },
    cnpj: "09990456233/0001-09",
    contact: {
      email: "yservice@gmail.com",
      primaryPhone: "889999999",
      secondaryPhone: "859999999"
    },
    name: "Felipe Alves",
    stateEnrolment: "n sei"
  },
  {
    address: {
      cep: "60843-550",
      cityDTO: {
        name: "Juazeiro",
        stateDTO: {
          name: "Ce"
        }
      },
      neighbor: "Centro",
      number: "190",
      street: "Rua são pedro"
    },
    cnpj: "09990423333/0001-09",
    contact: {
      email: "yreservice@gmail.com",
      primaryPhone: "889999999",
      secondaryPhone: "859999999"
    },
    name: "Maria Db",
    stateEnrolment: "n sei"
  }
];

const Provider = props => {
  return (
    <div>
    <Form/>
    <CardHeader title="Fornecedores">
      <DataTable>
        <THead>
          <Th name="Nome" />
          <Th name="Cnpj" />
          <Th name="Email" />
          <Th name="Cidade" />
          <Th name="Estado" />
        </THead>
        <TBody>
          {providers.length > 0 &&
            providers.map(item => (
              <tr key={item.name}>
                <Td name={item.name} />
                <Td name={item.cnpj} />
                <Td name={item.contact.email} />
                <Td name={item.address.cityDTO.name} />
                <Td name={item.address.cityDTO.stateDTO.name} />
              </tr>
            ))}
        </TBody>
      </DataTable>
    </CardHeader>
    </div>

  );
};

export default Provider;
