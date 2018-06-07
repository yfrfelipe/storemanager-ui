import React from "react";
import { reduxForm, Field, FormSection } from "redux-form";
import { connect } from "react-redux";

let Form = props => {
  const { handleSubmit, readOnly, submitValues } = props;

  return (
    <div>
      <form onSubmit={handleSubmit(submitValues)}>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="name">Nome</label>
            <Field
              name="name"
              id="name"
              className="form-control"
              component="input"
              type="text"
              placeholder="Nome"
            />
          </div>
          <div class="form-group col-md-3">
            <label for="stateEnrolment">Inscrição Estadual</label>
            <Field
              name="stateEnrolment"
              id="stateEnrolment"
              className="form-control"
              component="input"
              type="text"
              placeholder="Inscrição Estadual"
            />
          </div>
          <div class="form-group col-md-3">
            <label for="stateEnrolment">Cnpj</label>
            <Field
              name="cnpj"
              id="cnpj"
              className="form-control"
              component="input"
              type="text"
              placeholder="Cnpj"
            />
          </div>
        </div>
        <FormSection name="contact">
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="email">Email</label>
              <Field
                name="email"
                id="email"
                className="form-control"
                component="input"
                type="text"
                placeholder="Email"
              />
            </div>
            <div class="form-group col-md-3">
              <label for="primaryPhone">Telefone</label>
              <Field
                name="primaryPhone"
                id="primaryPhone"
                className="form-control"
                component="input"
                type="text"
                placeholder="Telefone"
              />
            </div>
            <div class="form-group col-md-3">
              <label for="secondaryPhone">Celular</label>
              <Field
                name="secondaryPhone"
                id="secondaryPhone"
                className="form-control"
                component="input"
                type="text"
                placeholder="Celular"
              />
            </div>
          </div>
        </FormSection>
        <FormSection name="address">
          <div class="form-row">
            <div class="form-group col-md-4">
              <label for="street">Rua</label>
              <Field
                name="street"
                id="street"
                className="form-control"
                component="input"
                type="text"
                placeholder="Rua"
              />
            </div>
            <div class="form-group col-md-2">
              <label for="number">Número</label>
              <Field
                name="number"
                id="number"
                className="form-control"
                component="input"
                type="text"
                placeholder="Número"
              />
            </div>
            <div class="form-group col-md-3">
              <label for="neighbor">Bairro</label>
              <Field
                name="neighbor"
                id="neighbor"
                className="form-control"
                component="input"
                type="text"
                placeholder="Bairro"
              />
            </div>
            <div class="form-group col-md-3">
              <label for="cep">Cep</label>
              <Field
                name="cep"
                id="cep"
                className="form-control"
                component="input"
                type="text"
                placeholder="Cep"
              />
            </div>
          </div>

          <FormSection name="cityDTO">
            <div class="form-row">
              <div class="form-group col-md-4">
                <label for="name">Cidade</label>
                <Field
                  name="name"
                  id="name"
                  className="form-control"
                  component="input"
                  type="text"
                  placeholder="Cidade"
                />
              </div>
              <FormSection name="stateDTO">
                <div class="form-group col-md-2">
                  <label for="name">Estado</label>
                  <Field
                    name="name"
                    id="name"
                    className="form-control"
                    component="input"
                    type="text"
                    placeholder="Estado"
                  />
                </div>
              </FormSection>
            </div>
          </FormSection>
        </FormSection>
        <button type="submit" className="btn btn-primary">
          Salvar
        </button>{" "}
      </form>
    </div>
  );
};

Form = reduxForm({
  form: "providerForm",
  initialValues: {},
  destroyOnUnmount: false
})(Form);

const mapDispatchToProps = dispatch => {
  return {
    submitValues: values =>
      dispatch({ type: "SUBMIT_PROVIDER", payload: values })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Form);

