import React from "react";
import { reduxForm, Field, FormSection } from "redux-form";
import { connect } from "react-redux";

import Contact from "../../../components/Contact"
import Address from "../../../components/Address"
import City from "../../../components/City"
import State from "../../../components/State"
import Client from "../Client"

let Form = props => {
  const { handleSubmit, readOnly, submitValues } = props;
  return (
    <div>
      <form onSubmit={handleSubmit(submitValues)}>
        <Client />
        <Contact />
        <Address>
          <City>
            <State />
          </City>
        </Address>
        <button type="submit" className="btn btn-primary">
          Salvar
        </button>{" "}
      </form>
    </div >
  );
};

Form = reduxForm({
  form: "customerForm",
  initialValues: {},
  destroyOnUnmount: false
})(Form);

const mapDispatchToProps = dispatch => {
  return {
    submitValues: values =>
      dispatch({
        type: "SUBMIT_CUSTOMER",
        payload: values
      })
  };
};

export default connect(null, mapDispatchToProps)(Form);
