import React, { Component } from "react";
import { Formik, Field } from "formik"
import FileUpload from "./FileUpload"
import { Container, Row, Col, Form, FormGroup, Button } from 'react-bootstrap';
class Pic extends Component {
    render() {
        return (
            <Container fluid={true} >
                <Row>
                    <Col md={3} xs={2}></Col>
                    <Col md={6} xs={8}>
                        <Formik>
                            <Field
                                name="image"
                                component={FileUpload}
                            />
                        </Formik>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Pic;