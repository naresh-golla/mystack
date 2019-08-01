import React, { Component } from "react";
import { customInputForm } from "./customInputForm";
import { Formik, Field } from "formik"
import { Container, Row, Col, Form, FormGroup, Button } from 'react-bootstrap';
import { Label, } from "reactstrap";
import * as Yup from "yup";
class Bio extends Component {
    constructor() {
        super();
        this.state = {}
    }
    render() {
        const SignupSchema = Yup.object().shape({
            firstname: Yup.string()
                .min(3, "Too Short!")
                .max(10, "Too Long!")
                .required("Required"),
            lastname: Yup.string()
                .min(3, "Too Short!")
                .max(10, "Too Long!")
                .required("Required"),
            email: Yup.string()
                .email("Invalid email")
                .required("Required")
        });
        return (
            <Container fluid={true} >
                <Row>
                    <Col md={3} xs={1}></Col>
                    <Col md={6} xs={10}>
                        <Formik
                            initialValues={{
                                firstname: '',
                                lastname: '',
                                email: ''
                            }}
                            validationSchema={SignupSchema}
                            onSubmit={values => {
                                // same shape as initial values
                                console.log(values);
                            }}>
                            <Form>
                                <FormGroup>
                                    <Label htmlFor="forfirstname">First Name</Label>
                                    <Field name="firstname" type={'text'} component={customInputForm} />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="forlastname">Last Name</Label>
                                    <Field name="lastname" type={'text'} component={customInputForm} />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="exampleEmail">Email</Label>
                                    <Field name="email" type={'email'} component={customInputForm} />
                                </FormGroup>
                                <Button>Submit</Button>
                            </Form>
                        </Formik>
                    </Col>
                    <Col md={3} xs={1}></Col>
                </Row>
            </Container>
        )
    }
}
export default Bio;