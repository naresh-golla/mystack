import React, { Component } from "react";
import { Container, Row, Col, Form, FormGroup, Button } from 'react-bootstrap';
import "./about.css";
class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeDiv: false,
            card: [
                { id: "0", icon: "fa fa-thumbs-up", title: "Support my campaign" },
                { id: "1", icon: "fa fa-github", title: "View my Projects" },
                { id: "2", icon: "fa fa-cloud-download", title: "Download my app" },
                { id: "3", icon: "fa fa-music", title: "Listen to my music" },
                { id: "4", icon: "fa fa-hand-o-up", title: "Hire me" },
                { id: "5", icon: "fa fa-chrome", title: "Visit my Website" },
                { id: "6", icon: "fa fa-file-text", title: "Read my articles" },
                { id: "7", icon: "fa fa-user-o", title: "My tinder Profile" },
                { id: "8", icon: "fa fa-shopping-cart", title: "Visit my store" },
                { id: "9", icon: "fa fa-podcast", title: "Listen to my podcast" },
                { id: "10", icon: "fa fa-calendar", title: "Attend my event" },
                { id: "11", icon: "fa fa-book", title: "Read my Book" },
                { id: "12", icon: "fa fa-cloud-download", title: "Download my resume" },
                { id: "13", icon: "fa fa-chrome", title: "Visit my company" },
                { id: "14", icon: "fa fa-newspaper-o", title: "Sign up for my news letter" },
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
                                    <div className="cardP" >
                                        {this.state.card.map(item => {
                                            return (
                                                //className={this.state.activeDiv ? "activecardclass" : "cardclass"}
                                                <div onClick={this.handleClick} className={this.state.activeDiv ? "activecardclass" : "cardclass"} >
                                                    <div><i style={{ fontSize: "28px" }} className={item.icon}></i></div>
                                                    <span>{item.title}</span>
                                                </div>

                                            )
                                        })}
                                    </div>
                                </Col>

                            </Row>
                        </div>
                    </Col>
                    <Col md={3} xs={1}></Col>
                </Row>
            </Container >
        )
    }
}
export default About;