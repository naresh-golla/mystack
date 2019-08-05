import React, { Component } from "react";
import { customInputForm } from "./customInputForm";
import { Formik, Field } from "formik"
import { Container, Row, Col, Form, FormGroup, Button } from 'react-bootstrap';
import { Label, } from "reactstrap";
import * as Yup from "yup";
class Link extends Component {
    constructor() {
        super();
        this.state = {}
    }
    render() {
        const SignupSchema = Yup.object().shape({
            link: Yup.string()
                .required("Required")
                .url("Invalid url")
        });
        console.log(this.props.setAboutDetails)
        return (
            <Container fluid={true} >
                <Row>
                    <Col md={3} xs={1}></Col>
                    <Col md={6} xs={10}>
                        <div className="text-center">
                            <i className={`faFontLarge ${this.props.setAboutDetails.icon}`}></i>
                        </div>
                        <div className="text-center">
                            <h2>{this.props.setAboutDetails.title}</h2>
                        </div>
                        <Formik
                            initialValues={{
                                name: '',

                            }}
                            validationSchema={SignupSchema}
                            onSubmit={values => {
                                // same shape as initial values
                                console.log(values);
                            }}>
                            <Form>
                                <FormGroup>
                                    <Label htmlFor="forlink">Enter a link to your {this.props.setAboutDetails.title} </Label>
                                    <Field name="link" type={'text'} component={customInputForm} />
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
export default Link;