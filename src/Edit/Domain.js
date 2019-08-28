import React, { Component } from "react";
import { observer } from 'mobx-react';
import { customInputForm } from "./customInputForm";
import { Formik, Field, ErrorMessage, Form } from "formik"
import { Container, Row, Col, FormGroup, Button } from 'react-bootstrap';
import { Label,} from "reactstrap";
import * as Yup from "yup";
import { customInputDomain } from "./customInputDomain";
import { FormFeedback, Input } from "reactstrap"

class Domain extends Component {
    constructor() {
        super();
        this.state = {
            customdomain: "",
            errorMsg : false
            
        }
    }
    changedValue = (e) => {
        this.props.createProfile.setDomain(this.state.customdomain);
        this.setState({
            customdomain: e.target.value
        })
        if(this.state.customdomain.length >= 2){
            this.setState({
                errorMsg : false
            })
          }
    }
    submitHandler = (e) => {  
        debugger;
        if(this.state.customdomain.length >= 3){
            this.props.createProfile.createUser();
            this.props.setDomain(this.state.customdomain);
            this.props.history.push("/" + this.state.customdomain);
            console.log("domain",this.state.customdomain);
            //window.location.reload();
            
        }else {
            this.setState({
                errorMsg : true
            })
        }   
       
    }
   
    render() {
        const DomainSchema = Yup.object().shape({
            domain: Yup.string().min(3)
                .max(10)
                .required("required"),
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
                                                onChange={(e)=>this.changedValue(e)}
                                                className={'form-control'} 

                                                />
                                            <ErrorMessage name="domain" component="div" className="invalid-feedback" />
                                        </div>
                                        {this.state.errorMsg ? (<p style={{"color":"red"}}>please enter minimum three charcters</p>):""}
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