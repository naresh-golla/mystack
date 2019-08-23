import React, { Component } from "react";
import { customInputForm } from "./customInputForm";
import { Formik, Field, ErrorMessage, Form } from "formik"
import { Container, Row, Col, FormGroup, Button } from 'react-bootstrap';
import { Label, Input } from "reactstrap";
import * as Yup from "yup";
import Script from "react-load-script";
import { observer } from "mobx-react";
class Location extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: ''
        }
    }

    handleScriptLoad = () => {
        // Declare Options For Autocomplete 
        var options = { types: [`(cities)`] };

        // Initialize Google Autocomplete 
        /*global google*/
        this.autocomplete = new google.maps.places.Autocomplete(
            document.getElementById(`autocomplete`),
            options);
        //Fire Event when a suggested name is selected
        this.autocomplete.addListener(`place_changed`,
            this.handlePlaceSelect);
    }
    handlePlaceSelect = () => {

        // Extract City From Address Object
        let addressObject = this.autocomplete.getPlace();
        let address = addressObject.address_components;

    }
    render() {
        const LocationSchema = Yup.object().shape({
            city: Yup.string()
                .min(2, "First name is Too Short!")
                .max(62, "First name is Too Long!")
                .required("Required"),

        });
        return (
            <Container fluid={true} >
                <Row>
                    <Col md={3} xs={1}></Col>
                    <Col md={6} xs={10}>
                        <div className="text-center">
                            <h1>Enter your city</h1>
                            <p>&nbsp;</p>
                        </div>
                        <div>
                            <Script
                                url="https://maps.googleapis.com/maps/api/js?key=AIzaSyCXMpUMMrjVgbWeWF99SfuFQhe06-ST62s&libraries=places"
                                onLoad={this.handleScriptLoad}
                            />
                            {/* <Input type="text" id="autocomplete" placeholder="enter city" /> */}

                            <Formik
                                initialValues={{
                                    city: '',
                                }}
                                validationSchema={LocationSchema}
                                onSubmit={fields => {
                                    this.props.createProfile.setBio({
                                        ...this.props.createProfile.bio,
                                        location: fields.city
                                    });
                                    this.props.history.push("/edit/intrest")
                                }}
                                render={({ errors, status, touched }) => (
                                    <Form>
                                        <div className="form-group">
                                            <Label htmlFor="city">Enter your city</Label>
                                            <Field name="city" type="text"
                                                style={{ "paddingLeft": "30px" }}
                                                placeholder="Enter your city"
                                                id="autocomplete" className={'form-control' + (errors.city && touched.city ? ' is-invalid' : '')} />
                                            <span><i className="fa fa-map-marker" style={{ "color": "#55aaaa", "fontSize": "28px", "position": "absolute", "marginTop": "-33px", "marginLeft": "8px" }}></i></span>
                                            <ErrorMessage name="city" component="div" className="invalid-feedback" />
                                        </div>
                                        <div className="form-group">
                                            <button type="submit" className="btn btn-primary mr-2">Submit</button>
                                        </div>
                                    </Form>
                                )}
                            />
                        </div>
                    </Col>
                    <Col md={3} xs={1}></Col>
                </Row>
            </Container>
        )
    }
}
export default observer(Location);