import React, { Component } from "react";
import { observer } from "mobx-react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import { Container, Row, Col } from "react-bootstrap";
import { Label } from "reactstrap";
import * as Yup from "yup";
class Bio extends Component {
    constructor() {
        super();
        this.state = {};
    }
    componentDidMount() {
        this.props.createProfile.setUserName(this.props.username);
    }
    nextChange = e => {
        this.setState({}, () => {
            //this.props.history.push("/edit/pic");
        });
    };
    render() {
        const SignupSchema = Yup.object().shape({
            firstName: Yup.string()
                .min(2, "First name is Too Short!")
                .max(12, "First name is Too Long!")
                .required("Required"),
            lastName: Yup.string()
                .min(2, "First name is Too Short!")
                .max(10, "First name is Too Long!")
                .required("Required"),
            email: Yup.string().email("Invalid email")
        });
        return (
            <Container fluid={true}>
                <Row>
                    <Col md={3} sm={1} xs={1} />
                    <Col md={6} sm={10} xs={10}>
                        <div className="text-center">
                            <h1>Bio</h1>
                            <p>&nbsp;</p>
                        </div>
                        <Formik
                            initialValues={{
                                firstName: "",
                                lastName: "",
                                email: ""
                            }}
                            validationSchema={SignupSchema}
                            onSubmit={fields => {                                
                                this.props.createProfile.setBio({
                                    ...fields,
                                    designation: "",
                                    location: ""
                                });
                                this.props.history.push("/edit/pic")
                            }}
                            render={({ errors, status, touched }) => (
                                <Form>
                                    <div className="form-group">
                                        <Label htmlFor="firstName">First Name</Label>
                                        <Field
                                            name="firstName"
                                            type="text"
                                            className={
                                                "form-control" +
                                                (errors.firstName && touched.firstName
                                                    ? " is-invalid"
                                                    : "")
                                            }
                                        />
                                        <ErrorMessage
                                            name="firstName"
                                            component="div"
                                            className="invalid-feedback"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <Label htmlFor="lastName">Last Name</Label>
                                        <Field
                                            name="lastName"
                                            type="text"
                                            className={
                                                "form-control" +
                                                (errors.lastName && touched.lastName
                                                    ? " is-invalid"
                                                    : "")
                                            }
                                        />
                                        <ErrorMessage
                                            name="lastName"
                                            component="div"
                                            className="invalid-feedback"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <Label htmlFor="email">
                                            Email <span>(optional)</span>
                                        </Label>
                                        <Field
                                            name="email"
                                            type="text"
                                            className={
                                                "form-control" +
                                                (errors.email && touched.email ? " is-invalid" : "")
                                            }
                                        />
                                        <ErrorMessage
                                            name="email"
                                            component="div"
                                            className="invalid-feedback"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary mr-2">
                                            Submit
                                        </button>
                                    </div>
                                </Form>
                            )}
                        />
                    </Col>
                    <Col md={3} sm={1} xs={1} />
                </Row>
            </Container>
        );
    }
}
export default observer(Bio);
