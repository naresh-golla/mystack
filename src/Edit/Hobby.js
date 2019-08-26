import React, { Component } from "react";
import {observer} from 'mobx-react';
import { Container, Row, Col, Form, FormGroup, Button } from 'react-bootstrap';
import { Label, Input } from "reactstrap";
import * as Yup from "yup";
import CustomButton from "./CustomButton";
class Hobby extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hobbysearchArr: "",
            hobbyintrestDefault: [
                "Student",
                "Web Developer",
                "Software Engineer",
                "Consultant",
                "Designer",
                "Teacher",
                "Hodler",
                "Self employed",
                "Author",
                "Moderator",
                "Manager",
                "Musician",
                "Teacher",
                "Father",
                "Mother",
                "Chef",
                "Filmmaker",
                "Actor",
                "Driector",
                "Producer",
                "Doctor",
                "Nurse",
                "Attorny",
                "Fund Manager",
                "Writer",
                "Editor",
                "Personal Trainer",
                "Architect",
                "Volunteer",
                "psychologist",
                "Business Owner",
                "Photographer",
                "Physician",
                " Teacher ",
                " Radiographer ",
                " Physiotherapist ",
                " Midwife ",
                " Accountant ",
                " Medical laboratory scientist ",
                " Bricklayers ",
                " Quantity surveyor ",
                " Paramedic ",
                " Labourer ",
                " Actuary ",
                " Technician ",
                " Engineer ",
                " Mechanic ",
                " Consultant ",
                " Tradesman ",
                " Physician ",
                " Surveyor ",
                " Technologist ",
                " Mechanical Engineer ",
                " Machinist ",
                " Scientist ",
                " Sonographer ",
                " Plumber ",
                " Electrician ",
                " Auto mechanic ",
                " Lawyer ",
                " Nurse practitioner ",
                " Dietitian ",
                " Butcher ",
                " Special Education Teacher ",
                " Welder ",
                " Surgeon ",
                " Clinical psychologist ",
                " Hairdresser ",
                " Joiner ",
                " Dental technician ",
                " Prosthetist ",
                " Veterinarian ",
                " Glazier ",
                " Panel beater ",
                " Dental hygienist ",
                " Operator ",
                " Plasterer ",
                " Youth Worker ",
                " Tool and die maker ",
                " Pharmacy technician ",
                " Secretary ",
                " Tailor ",
                " Refrigeration Mechanic ",
                " Nurse educator ",
            ],
            hobbyintrestSelected: []
        }
    }
    searchFun = (e) => {
        //console.log(e.target.value);
        let tempArr = [];
        this.state.hobbyintrestDefault.map((item, index) => {
            if (item.toLocaleLowerCase().match(e.target.value.toLocaleLowerCase())) {
                tempArr.push(item);
            }
        })
        this.setState({
            hobbysearchArr: tempArr
        })
    }
    clickedbtnFun = (val, shouldupdate) => {
        let valPushed = [];
        valPushed.push(val);
        if (shouldupdate !== true) {
            this.setState({
                hobbyintrestSelected: [...this.state.hobbyintrestSelected, ...valPushed]
            })
        } else {
            let valRemoved = this.state.hobbyintrestSelected.splice(this.state.hobbyintrestSelected.indexOf(val), 1);
            console.log(valRemoved);
            let removedlist = [];
            console.log(removedlist.push(valRemoved));
            // this.setState({
            //     hobbyintrestSelected: [ ...valRemoved]
            // })
        }
    }
    submitHobby = () => {
        this.props.createProfile.setHobby(...this.state.hobbyintrestSelected);
        this.props.history.push("/edit/about")
    }
    render() {
        console.log(this.state.hobbyintrestSelected);

        return (
            <Container fluid={true} >
                <Row>
                    <Col md={3} xs={1}></Col>
                    <Col md={6} xs={10}>
                        <div className="text-center">
                            <h1>What do you do</h1>
                            <p>&nbsp;</p>
                        </div>
                        <Form>
                            <FormGroup>
                                <Label htmlFor="forfirstname">What do you do</Label>
                                <Input type="text" placeholder="Enter your occupation or hobby" onChange={this.searchFun} />
                            </FormGroup>
                        </Form>
                        <div style={{ "display": "flex", "flexDirection": "row", "flexFlow": "wrap", "padding": "10px 5px 30px" }}>
                            {
                                (this.state.hobbysearchArr.length === 0) ?

                                    (this.state.hobbyintrestDefault.map((item, index) => {
                                        return <CustomButton item={item} key={index} clickedbtn={this.clickedbtnFun} />
                                    })) :

                                    (
                                        this.state.hobbysearchArr && this.state.searchArr.map((item, index) => {
                                            return <CustomButton item={item} key={index} clickedbtn={this.clickedbtnFun} />
                                        })
                                    )
                            }

                        </div>
                        {this.state.hobbyintrestSelected.length === 0 ? <p className="errormsg">Selection is required</p> : ""}
                        {(this.state.hobbyintrestSelected.length > 3) ? <p className="errormsg">Too many selections, you can select maximum 3 selections</p> : ""}

                        <Button onClick={() => this.submitHobby()}>Submit</Button>

                    </Col>
                    <Col md={3} xs={1}></Col>
                </Row>
            </Container >
        )
    }
}
export default observer(Hobby);