import React, { Component } from "react";
import { customInputForm } from "./customInputForm";
import { Formik, Field } from "formik"
import { Container, Row, Col, Form, FormGroup, Button } from 'react-bootstrap';
import { Label, Input } from "reactstrap";
import * as Yup from "yup";
import Script from "react-load-script";
import "./location.css";
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

        // Check if address is valid
        // if (address) {
        //     // Set State
        //     this.setState(
        //         {
        //             city: address[0].long_name,
        //             query: addressObject.formatted_address,
        //         }
        //     );
        // }
    }
    render() {
        const LocationSchema = Yup.object().shape({
            city: Yup.string()
                .min(1, "Too Short!")
                .max(50, "Too Long!")
                .required("Required")
        });
        return (
            <Container fluid={true} >
                <Row>
                    <Col md={3} xs={1}></Col>
                    <Col md={6} xs={10}>
                        <div>
                            <Script
                                url="https://maps.googleapis.com/maps/api/js?key=AIzaSyCXMpUMMrjVgbWeWF99SfuFQhe06-ST62s&libraries=places"
                                onLoad={this.handleScriptLoad}
                            />
                            {/* <Input type="text" id="autocomplete" placeholder="enter city" /> */}

                            <Formik
                                initialValues={{
                                    city: ''
                                }}
                                validationSchema={LocationSchema}
                                onSubmit={values => {
                                    // same shape as initial values
                                    console.log(values);
                                }}>
                                <Form>
                                    <FormGroup id="locationField">
                                        <Label htmlFor="forcity">Where do you Live</Label>

                                        <Field name="city"
                                            type={'text'}
                                            id="autocomplete"
                                            placeholder="Enter your city"
                                            component={customInputForm}
                                            style={{ "paddingLeft": "30px" }}
                                        />
                                        <span><i className="fa fa-map-marker" style={{ "color": "#55aaaa", "fontSize": "28px", "position": "absolute", "marginTop": "-33px", "marginLeft": "8px" }}></i></span>
                                    </FormGroup>

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
export default Location;