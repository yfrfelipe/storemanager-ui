import React from "react"
import { Field, FormSection } from "redux-form";
import renderField from "../RenderField";

const City = props => (
    <FormSection name="cityDTO">
        <div className="form-row">
            <Field
                id="name"
                name="name"
                className="form-control"
                component={renderField}
                type="text"
                label="Cidade"
                col="4" />
            {props.children}
        </div>
    </FormSection>
)

export default City;