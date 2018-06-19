import React from "react"
import { Field, FormSection } from "redux-form";
import renderField from "../../../components/RenderField";

const ClientProvider = () => (
    <div class="form-row">
        <Field
            id="name"
            name="name"
            className="form-control"
            component={renderField}
            label="Nome"
            type="text"
            col="6" />
        <Field
            id="stateEnrolment"
            name="stateEnrolment"
            className="form-control"
            component={renderField}
            type="text"
            label="Inscrição Estadual"
        />
        <Field
            id="cnpj"
            name="cnpj"
            className="form-control"
            component={renderField}
            type="text"
            label="Cnpj"
            col="3"
        />
    </div>
)

export default ClientProvider;