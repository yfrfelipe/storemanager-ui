import React from "react"

const RenderField = ({
    input,
    label,
    type,
    className,
    col,
    meta: { touched, error }
  }) => (
        <div className={`form-group col-md-${col}`}>
            <label>{label}</label>
            <div>
                <input {...input} placeholder={label} type={type} className={className} />
                {touched && (error && <span>{error}</span>)}
            </div>
        </div>
    );

export default RenderField;