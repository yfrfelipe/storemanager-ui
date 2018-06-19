import React from "react"
import { Field, FormSection } from "redux-form";
import renderField from "../RenderField";

const Address = props => (
    <FormSection name="address">
        <div class="form-row">
            <Field
                id="street"
                name="street"
                className="form-control"
                component={renderField}
                type="text"
                label="Rua"
                col="4" />
            <Field
                id="number"
                name="number"
                className="form-control"
                component={renderField}
                type="text"
                label="Número"
                col="2" />
            <Field
                id="neighbor"
                name="neighbor"
                className="form-control"
                component={renderField}
                type="text"
                label="Bairro"
                col="3" />
            <Field
                id="cep"
                name="cep"
                className="form-control"
                component={renderField}
                type="text"
                label="Cep"
                col="3" />
        </div>
        {props.children}
    </FormSection>
)
export default Address;