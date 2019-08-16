import React, { Component } from "react";
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
        this.state.intrestDefault.map((item, index) => {
            if (item.toLocaleLowerCase().match(e.target.value.toLocaleLowerCase())) {
                tempArr.push(item);
            }
        })
        this.setState({
            searchArr: tempArr
        })
    }
    clickedbtnFun = (val, shouldupdate) => {
        if (shouldupdate !== true) {
            this.setState({
                intrestSelected: [...this.state.intrestSelected, val]
            })
        } else {
            this.state.intrestSelected.splice(this.state.intrestSelected.indexOf(val), 1);
            this.setState({
                intrestSelected: this.state.intrestSelected
            })
        }
    }
    render() {
        console.log(this.state.intrestSelected);
        return (
            <Container fluid={true} >
                <Row>
                    <Col md={3} xs={1}></Col>
                    <Col md={6} xs={10}>
                        <div className="text-center">
                            <h1>Your Intrests</h1>
                            <p>&nbsp;</p>
                        </div>
                        <Form>
                            <FormGroup>
                                <Label htmlFor="forfirstname">Your Intrests</Label>
                                <Input type="text" placeholder="choose two to five intrests" onChange={this.searchFun} />
                            </FormGroup>
                        </Form>
                        <div style={{ "display": "flex", "flexDirection": "row", "flexFlow": "wrap", "padding": "10px 5px 30px" }}>
                            {
                                (this.state.searchArr.length === 0) ?

                                    (this.state.intrestDefault.map((item, index) => {
                                        return <CustomButton item={item} key={index} clickedbtn={this.clickedbtnFun} />
                                    })) :

                                    (
                                        this.state.searchArr && this.state.searchArr.map((item, index) => {
                                            return <CustomButton item={item} key={index} clickedbtn={this.clickedbtnFun} />
                                        })
                                    )
                            }

                        </div>
                        {this.state.intrestSelected.length === 0 ? <p className="errormsg">selection is required</p> : ""}
                        {(this.state.intrestSelected.length <= 2 && this.state.intrestSelected.length > 0) ? <p className="errormsg">Mininum 3 selections is required</p> : ""}
                        {this.state.intrestSelected.length > 5 ? <p className="errormsg">Maximum 5 selections only</p> : ""}
                        <Button onClick={() => this.props.history.push("/edit/hobby")}>Submit</Button>

                    </Col>
                    <Col md={3} xs={1}></Col>
                </Row>
            </Container >
        )
    }
}
export default Intrest;