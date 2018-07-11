<DataTable>
<THead>
  <Th name="Nome" />
  <Th name="Cpf" />
  <Th name="Email" />
  <Th name="Cidade" />
  <Th name="Estado" />
</THead>
<TBody>
  {customers.length > 0 &&
    customers.map(item => (
      <tr key={item.name}>
        <Td name={item.name} />
        <Td name={item.cpf} />
        <Td name={item.contact.email} />
        <Td name={item.address.cityDTO.name} />
        <Td name={item.address.cityDTO.stateDTO.name} />
      </tr>
    ))}
</TBody>
</DataTable>