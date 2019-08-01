import React from "react";

import { FormFeedback, Input } from "reactstrap"

export const customInputForm = ({ field, form: { touched, errors }, ...props }) => (
    <div>
        <Input
            invalid={!!(touched[field.name] && errors[field.name])}
            {...field}
            {...props} />
        {touched[field.name] && errors[field.name] && <FormFeedback>{errors[field.name]}</FormFeedback>}
    </div>
);

// export default customInputForm;