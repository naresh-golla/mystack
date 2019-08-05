import React, { Component } from "react";
import { customInputForm } from "./customInputForm";
import { Formik, Field } from "formik"
import { Container, Row, Col, Form, FormGroup, Button } from 'react-bootstrap';
import { Label, } from "reactstrap";
import * as Yup from "yup";
import { customInputDomain } from "./customInputDomain";
import { FormFeedback, Input } from "reactstrap"

class Domain extends Component {
    constructor() {
        super();
        this.state = {
            customdomain: ""
        }
    }
    changedValue = (e) => {
        this.setState({
            customdomain: e.target.value
        })
    }
    render() {
        const SignupSchema = Yup.object().shape({
            domainlink: Yup.string()
                .required("Required")
                .min(3)
                .max(10)
        });

        return (
            <Container fluid={true} >
                <Row>
                    <Col md={3} xs={1}></Col>
                    <Col md={6} xs={10}>
                        <div className="text-center">
                            <i className="faFontLarge fa fa-globe"></i>
                        </div>
                        <div className="text-center">
                            <h2>Enter your custom Domain</h2>
                        </div>
                        <div className="text-center" style={{ "paddingTop": "5%" }}>
                            <h2 className="text-info">https://mystack.com/{this.state.customdomain}</h2>
                        </div>
                        <div style={{ "paddingTop": "5%" }}>
                            <Formik
                                initialValues={{
                                    domainlink: '',
                                }}
                                validationSchema={SignupSchema}
                                onSubmit={values => {
                                    // same shape as initial values
                                    console.log(values);
                                }}>
                                <Form>
                                    <FormGroup>{console.log(this.state.customdomain, "././")}
                                        <Field placeholder="" name="domainlink" type={'text'} onChange={this.changedValue} value={this.state.customdomain} component={customInputDomain} />
                                    </FormGroup>
                                    {/* <Input placeholder="enter your name" onChange={this.changedValue} value="a" /> */}
                                    <p />
                                    <Button>Submit</Button>
                                </Form>
                            </Formik>
                        </div>
                    </Col>
                    <Col md={3} xs={1}></Col>
                </Row>
            </Container>
        )
    }
}
export default Domain;