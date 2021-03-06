import React from "react"
import { Field } from "redux-form";
import renderField from "../../../components/RenderField";

const Client = () => (
    <div className="form-row">
        <Field
            id="name"
            name="name"
            className="form-control"
            component={renderField}
            label="Nome"
            type="text"
            col="6" />
        <Field
            id="cpf"
            name="cpf"
            className="form-control"
            component={renderField}
            label="Cpf"
            type="text"
            col="3" />
    </div>
)
export default Client