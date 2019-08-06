import React from "react";

import { FormFeedback, Input } from "reactstrap"

export const customInputForm = ({ field, form: { touched, errors, setFieldValue, values }, ...props }) => {

    return (
        < div >
            <Input
                value={values[field.name]}
                onChange={(e) => setFieldValue(field.name, e.target.value)}
                invalid={!!(touched[field.name] && errors[field.name])} />
            {touched[field.name] && errors[field.name] && <FormFeedback>{errors[field.name]}</FormFeedback>}
        </div>
    )
}


