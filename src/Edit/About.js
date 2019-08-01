import React, { Component } from "react";
import { Container, Row, Col, Form, FormGroup, Button } from 'react-bootstrap';
import "./about.css";
class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeDiv: false,
            card: [
                { id: "0", icon: "", tille: "Support my campaign" },
                { id: "1", icon: "", tille: "View my Projects" },
                { id: "2", icon: "", tille: "Download my app" },
                { id: "3", icon: "", tille: "Listen to my music" },
                { id: "4", icon: "", tille: "Sign up for my news letter" },
                { id: "5", icon: "", tille: "Visit my Website" },
                { id: "6", icon: "", tille: "Read my articles" },
                { id: "7", icon: "", tille: "My tinder Profile" },
                { id: "8", icon: "", title: "Visit my store" },
                { id: "9", icon: "", title: "Listen to my podcast" },
                { id: "10", icon: "", title: "Attend my event" },
            ]
        }
    }
    handleClick = () => {
        this.setState({
            activeDiv: !this.state.activeDiv
        });
    }
    render() {

        return (
            <Container fluid={true} >
                <Row>
                    <Col md={3} xs={1}></Col>
                    <Col md={6} xs={10}>
                        <div>
                            <p>What Do you want to highlight on your page</p>
                            <p></p>
                            <Row>
                                <Col md={12} xs={12}>
                                    <div className="cardP">
                                        <div className={this.state.activeDiv ? "activecardclass" : "cardclass"} onClick={this.handleClick} >
                                            <div>img</div>
                                            <span></span>
                                        </div>
                                        <div className="cardclass">
                                            <div>img</div>
                                            <span></span>
                                        </div>

                                        <div className="cardclass">
                                            <div>img</div>
                                            <span></span>
                                        </div>

                                    </div>
                                </Col>

                            </Row>
                        </div>
                    </Col>
                    <Col md={3} xs={1}></Col>
                </Row>
            </Container>
        )
    }
}
export default About;