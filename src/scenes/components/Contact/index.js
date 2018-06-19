import React from "react"
import { Field, FormSection } from "redux-form";
import renderField from "../RenderField";

const Contact = () => (
    <FormSection name="contact">
        <div className="form-row">
            <Field
                id="email"
                name="email"
                className="form-control"
                component={renderField}
                type="text"
                label="Email"
                col="6" />
            <Field
                id="primaryPhone"
                name="primaryPhone"
                className="form-control"
                component={renderField}
                type="text"
                label="Telefone"
                col="3" />
            <Field
                id="secondaryPhone"
                name="secondaryPhone"
                className="form-control"
                component={renderField}
                type="text"
                label="Celular"
                col="3" />
        </div>
    </FormSection>
)

export default Contact;