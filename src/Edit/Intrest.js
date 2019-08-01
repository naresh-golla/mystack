import React, { Component } from "react";
import { customInputForm } from "./customInputForm";
import { Container, Row, Col, Form, FormGroup, Button } from 'react-bootstrap';
import { Label, Input } from "reactstrap";
import * as Yup from "yup";
import CustomButton from "./CustomButton";
class Intrest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchArr: "",
            intrestDefault: [
                "Crypto",
                "Blockchain",
                "Music",
                "Entrepreneurship",
                "Travel",
                "Hiking",
                "Politics",
                "DIY",
                "Cooking",
                "Web Development",
                "Blockstack",
                "Programming",
                "Libertarianism",
                "cricket",
                "BasketBall",
                "FootBall",
                "Rugby",
                "Arts",
                "Dance",
                "Artist",
                "Photoprapher",
                "Actor",
                "Director",
                "Fashion",
                "Shopping",
                "Bitcoin",
                "Manager",
                "Dogs",
                "Cats",
                "Painting",
                "Yoga",
                "Innovation",
                "AI",
                "Education",
                "Coffee",
                "Design",
                "Mining",
                "HCP",
                "Social",
                "Connect",
                "Collab",
                "Cult",
                "Meetup"
            ],
            intrestSelected: []
        }
    }
    searchFun = (e) => {
        console.log(e.target.value);
        let tempArr = [];
        this.state.intrestDefault.map(item => {
            if (item.toLocaleLowerCase().match(e.target.value.toLocaleLowerCase())) {
                tempArr.push(item);
            }
        })
        this.setState({
            searchArr: tempArr
        })
    }
    clickedbtnFun = (val, shouldupdate) => {
        let valPushed = [];
        valPushed.push(val);
        if (shouldupdate !== true) {
            this.setState({
                intrestSelected: [...this.state.intrestSelected, ...valPushed]
            })
        } else {
            let valRemoved = this.state.intrestSelected.splice(this.state.intrestSelected.indexOf(val), 1);
            console.log(valRemoved);
            let removedlist = [];
            console.log(removedlist.push(valRemoved));
            // this.setState({
            //     intrestSelected: [ ...valRemoved]
            // })
        }
    }
    render() {
        console.log(this.state.intrestSelected);
        const IntrestSchema = Yup.object().shape({
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
                        <Form>
                            <FormGroup>
                                <Label htmlIntrests="forfirstname">Your Intrests</Label>
                                <Input type="text" placeholder="choose two to five intrests" onChange={this.searchFun} />
                            </FormGroup>
                        </Form>
                        <div style={{ "display": "flex", "flexDirection": "row", "flexFlow": "wrap", "padding": "10px 5px 30px" }}>
                            {
                                (this.state.searchArr.length == 0) ?

                                    (this.state.intrestDefault.map(item => {
                                        return <CustomButton item={item} clickedbtn={this.clickedbtnFun} />
                                    })) :

                                    (
                                        this.state.searchArr && this.state.searchArr.map(item => {
                                            return <CustomButton item={item} clickedbtn={this.clickedbtnFun} />
                                        })
                                    )
                            }

                        </div>
                        {this.state.intrestSelected.length == 0 ? <p className="errormsg">selection is required</p> : ""}
                        {(this.state.intrestSelected.length <= 2 && this.state.intrestSelected.length > 0) ? <p className="errormsg">Mininum 3 selections is required</p> : ""}
                        {this.state.intrestSelected.length > 5 ? <p className="errormsg">Maximum 5 selections only</p> : ""}
                        <Button>Submit</Button>

                    </Col>
                    <Col md={3} xs={1}></Col>
                </Row>
            </Container >
        )
    }
}
export default Intrest;