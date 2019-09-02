import React, { Component } from "react";
import { observer } from 'mobx-react';
import { Container, Row, Col, FormGroup, Button } from 'react-bootstrap';
import { Label, } from "reactstrap";
import * as Yup from "yup";
import { customInputDomain } from "./customInputDomain";
import { FormFeedback, Input,Spinner } from "reactstrap";
import HTTPService from "../services/http-service";

class Domain extends Component {
    constructor() {
        super();
        this.state = {
            customdomain: "",
            errorMsg: false,
            spinner :false
        }
    }
    createUser = () => {
        this.setState({
            spinner:true
        })
        const httpService = new HTTPService();
        const { username,
            bio,
            about,
            spotlight,
            education,
            work,
            design,
            socialprofile,
            pic,
            interests,
            hobby
        } = this.props.createProfile;
        const params = {
            username,
            bio,
            about,
            spotlight,
            education,
            work,
            design,
            socialprofile,
            pic,
            interests,
            hobby,
            domain: this.state.customdomain,
        };

        httpService.createUser(params).then((response) => {
            this.props.history.push("/" + this.state.customdomain);
        }).catch(error => {
            this.error = "Create User Failed"
        });
    }

    changedValue = (e) => {
        // this.props.createProfile.setDomain(this.state.customdomain);
        this.setState({
            customdomain: e.target.value
        })
        if (this.state.customdomain.length >= 2) {
            this.setState({
                errorMsg: false
            })
        }
    }

    submitHandler = (e) => {
        if (this.state.customdomain.length >= 3) {
            this.createUser();
            this.props.setDomain(this.state.customdomain);
            this.setState({
                spinner: true
            })
        } else {
            this.setState({
                errorMsg: true
            })
        }

    }

    render() {

        return (
            <Container fluid={true} >
                {this.state.spinner? (
                                            <span className="spinnerClass">
                                            <Spinner animation="border" role="status" variant="primary">
                                                <span className="sr-only">Loading...</span>
                                            </Spinner>
                                        </span>
                ):""}
                <Row>
                    <Col md={3} xs={1}></Col>
                    <Col md={6} xs={10}>
                        <div className="text-center">
                            <i className="faFontLarge fa fa-globe"></i>
                        </div>
                        <div className="text-center">
                            <h1>Enter your custom Domain</h1>
                            <p>&nbsp;</p>
                        </div>
                        <div className="text-center" style={{ "paddingTop": "5%" }}>
                            <h2 className="text-info">https://mystack.id/{this.state.customdomain}</h2>
                        </div>
                        <div style={{ "paddingTop": "5%" }}>
                            <div className="form-group">
                                <Label htmlFor="domain">Enter name for your customised link </Label>
                                <Input name="domain" type="text"
                                    placeholder="Enter your domain"
                                    onChange={(e) => this.changedValue(e)}
                                    className={'form-control inputPaddingLeft'}

                                />
                            </div>
                            {/* {this.state.errorMsg ? (<p style={{"color":"red"}}>please enter minimum three charcters</p>):""} */}
                            <div className="form-group">
                                <button type="submit" onClick={this.submitHandler} className="btn btn-primary mr-2">Submit</button>
                            </div>
                        </div>
                    </Col>
                    <Col md={3} xs={1}></Col>
                </Row>
            </Container>
        )
    }
}
export default observer(Domain);