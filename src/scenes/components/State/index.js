import React from "react"
import { Field, FormSection } from "redux-form";
import renderField from "../RenderField";

const State = () => (
    <FormSection name="stateDTO">
        <Field
            id="name"
            name="name"
            className="form-control"
            component={renderField}
            type="text"
            label="Estado"
            col="2" />
    </FormSection>
)
export default State;