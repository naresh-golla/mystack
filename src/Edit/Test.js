import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

export const Test = ({ values, errors, touched, isSubmitting }) => {
    return (
        <div>
            <Form>
                <div>
                    <Field
                        className={`${touched.email && errors.email && 'wr'}`}
                        type="email"
                        name="email"
                        placeholder="mail.."
                    />
                    {touched.email && errors.email && <p>{errors.email}</p>}
                </div>
                <br />
                <Field
                    className={`${touched.password && errors.password && 'wr'}`}
                    type="password" name="password" placeholder="password.." />
                {touched.password && errors.password && <p>{errors.password}</p>}
                <br />
                <label>
                    <Field type="checkbox" name="check" checked={values.check} /> Agrree{" "}
                </label>
                <br />
                <Field component="select" name="sel">
                    <option value="one">one</option>
                    <option value="two">two</option>
                    <option value="three">three</option>
                </Field>
                <br /> <br />
                <button disabled={isSubmitting} type="submit">
                    {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
                </button>
            </Form>
        </div>
    );
};
export const FormikApp = withFormik({
    mapPropsToValues(props) {
        const { email, password, check, sel } = props;
        return {
            email: email || "",
            password: password || "",
            check: check || true,
            sel: sel || "two"
        };
    },
    handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
        setTimeout(() => {
            if (values.email === "bollt@b.b") {
                setErrors({ email: "email already taken" });
            } else {
                resetForm();
            }
            setSubmitting(false);
        }, 2000);
        console.log(values)
    },
    validationSchema: Yup.object().shape({
        email: Yup.string()
            .email(`"email not valid"`)
            .min(8)
            .required("email is required"),
        password: Yup.string()
            .min(6, "required 6 chars")
            .required()
    })
})(Test);