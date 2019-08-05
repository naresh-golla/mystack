import React from "react";

import { FormFeedback, Input } from "reactstrap"

export const customInputDomain = ({ field, form: { touched, errors }, ...props }) => (

    < div >
        {console.log(props, "props")}
        <Input className=""
            invalid={!!(touched[field.name] && errors[field.name])}
            {...field}
            {...props} />
        {touched[field.name] && errors[field.name] && <FormFeedback>{errors[field.name]}</FormFeedback>}
    </div >
);

// export default customInputDomain;