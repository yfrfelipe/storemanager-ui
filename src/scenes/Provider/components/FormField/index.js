import React from "react";
import { reduxForm, Field, FormSection } from "redux-form";
import { connect } from "react-redux";

let Form = props => {
  const { handleSubmit, readOnly, onRequest } = props;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Field
          name="name"
          id="name"
          className="form-control"
          component="input"
          type="text"
        />
        <Field
          name="stateEnrolment"
          id="stateEnrolment"
          className="form-control"
          component="input"
          type="text"
        />
        <Field
          name="cnpj"
          id="cnpj"
          className="form-control"
          component="input"
          type="text"
        />
        <FormSection name="contact">
          <Field
            name="email"
            id="email"
            className="form-control"
            component="input"
            type="text"
          />

          <Field
            name="primaryPhone"
            id="primaryPhone"
            className="form-control"
            component="input"
            type="text"
          />

          <Field
            name="secondaryPhone"
            id="secondaryPhone"
            className="form-control"
            component="input"
            type="text"
          />
        </FormSection>
        <FormSection name="address">
          <Field
            name="neighbor"
            id="neighbor"
            className="form-control"
            component="input"
            type="text"
          />

          <Field
            name="number"
            id="number"
            className="form-control"
            component="input"
            type="text"
          />

          <Field
            name="street"
            id="street"
            className="form-control"
            component="input"
            type="text"
          />
          <Field
            name="cep"
            id="cep"
            className="form-control"
            component="input"
            type="text"
          />
          <FormSection name="cityDTO">
            <Field
              name="name"
              id="name"
              className="form-control"
              component="input"
              type="text"
            />
            <FormSection name="stateDTO">
              <Field
                name="name"
                id="name"
                className="form-control"
                component="input"
                type="text"
              />
            </FormSection>
          </FormSection>
        </FormSection>
        <button type="submit">salvar</button>{" "}
      </form>
    </div>
  );
};

Form = reduxForm({ form: "formProvider", destroyOnUnmount: false })(Form);

const mapStateToProps = state => {
  return {
    localidades: state.localidade.item
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequest: () => dispatch({ type: "API_CALL_REQUEST" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);

// {
//     address: {
//       cep: "60843-000",
//       cityDTO: {
//         name: "Fortaleza",
//         stateDTO: {
//           name: "Ce"
//         }
//       },
//       neighbor: "Guajiru",
//       number: "190",
//       street: "Rua socorro gomes"
//     },
//     cnpj: "09990456233/0001-09",
//     contact: {
//       email: "yservice@gmail.com",
//       primaryPhone: "889999999",
//       secondaryPhone: "859999999"
//     },
//     name: "Felipe Alves",
//     stateEnrolment: "n sei"
//   },
