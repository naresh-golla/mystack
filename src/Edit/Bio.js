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
    hanleSubmit = (e) => {

    }
    changevalue = (e) => {
        console.log(e)
    }
    handleChangeInput = (e) => {
        console.log(e.target.value, "event")
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
                    <Col md={3} sm={1} xs={1}></Col>
                    <Col md={6} sm={10} xs={10}>
                        <Formik
                            initialValues={{
                                firstname: '',
                                lastname: '',
                                emails: ''
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
                                    <Field name="emails" type={'email'} component={customInputForm} />
                                </FormGroup>
                                <Button onClick={() => this.props.history.push("/edit/pic")} className="btn btn-outline-primary">Submit</Button>
                            </Form>
                        </Formik>
                    </Col>
                    <Col md={3} sm={1} xs={1}></Col>
                </Row>
            </Container>
        )
    }
}
export default Bio;