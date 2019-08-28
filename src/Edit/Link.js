import React, { Component } from "react";
import { observer } from 'mobx-react';
import { customInputForm } from "./customInputForm";
import { Formik, Field, ErrorMessage, Form } from "formik"
import { Container, Row, Col, FormGroup, Button } from 'react-bootstrap';
import { Label, } from "reactstrap";
import * as Yup from "yup";
class Link extends Component {
    constructor() {
        super();
        this.state = {}
    }
    render() {
        
        const LinkSchema = Yup.object().shape({
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
                            <h1>{this.props.setAboutDetails.title}</h1>
                        </div>
                        <Formik
                            initialValues={{
                                link: '',
                            }}
                            validationSchema={LinkSchema}
                            onSubmit={fields => {
                                console.log('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
                                this.props.createProfile.setSpotlightValue({ 
                                    ...this.props.createProfile.spotlight,
                                    url: fields.link
                                });
                                this.props.history.push("/edit/domain")
                            } 
                            }
                            render={({ errors, status, touched }) => (
                                <Form>
                                    <div className="form-group">
                                        <Label htmlFor="forlink">Enter a link to your {this.props.setAboutDetails.title} </Label>
                                        <Field name="link" type="text"
                                            placeholder="Enter your link"
                                            className={'form-control' + (errors.link && touched.link ? ' is-invalid' : '')} />

                                        <ErrorMessage name="link" component="div" className="invalid-feedback" />
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary mr-2">Submit</button>
                                    </div>
                                </Form>
                            )}
                        />
                    </Col>
                    <Col md={3} xs={1}></Col>
                </Row>
            </Container>
        )
    }
}
export default observer(Link);