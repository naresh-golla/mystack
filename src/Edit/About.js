import React, { Component } from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import {observer} from 'mobx-react';
class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeDiv: "",
            card: [
                { id: "0", icon: "fa fa-book", title: "Read my Book" },
                { id: "1", icon: "fa fa-github", title: "View my Projects" },
                { id: "2", icon: "fa fa-cloud-download", title: "Download my app" },
                { id: "3", icon: "fa fa-music", title: "Listen to my music" },
                { id: "4", icon: "fa fa-hand-o-up", title: "Hire me" },
                { id: "15", icon: "fa fa-align-left", title: "Read my Blog" },
                { id: "5", icon: "fa fa-chrome", title: "Visit my Website" },
                { id: "6", icon: "fa fa-cloud-download", title: "Download my resume" },
                { id: "7", icon: "fa fa-podcast", title: "Listen to my podcast" },
                { id: "8", icon: "fa fa-building-o", title: "Visit my company" },
                { id: "9", icon: "fa fa-file-text", title: "Read my articles" },
                { id: "10", icon: "fa fa-shopping-cart", title: "Visit my store" },
                { id: "11", icon: "fa fa-newspaper-o", title: "Sign up for my news letter" },
                { id: "12", icon: "fa fa-user-o", title: "My Profile" },
                { id: "13", icon: "fa fa-calendar", title: "Attend my event" },
                { id: "14", icon: "fa fa-thumbs-up", title: "Support my campaign" },
            ],
            validationMsg :false
        }
    }
    handleClick = (item) => {
        // console.log(item)        
        this.setState({
            activeDiv: item.id,
            activeItem: item,
            validationMsg :false
        });
    }
    nextClick = (e) => {
        e.preventDefault();
        if(this.state.activeDiv !== '')
        {   this.props.getAboutDetails(this.state.activeItem);
            this.props.createProfile.setSpotlightValue(this.state.activeItem);          
            //this.props.history.push("/edit/Link");
        }
        else {
            this.setState({
             validationMsg : true
            });
        }
    }

    render() {

        return (
            <Container fluid={true} >
                <Row>
                    <Col md={3} xs={1}></Col>
                    <Col md={6} xs={10}>
                        <div>
                            <div className="text-center">
                                <h1>What do you want to highlight on your page</h1>
                                <p>&nbsp;</p>
                            </div>
                            <p></p>
                            <Row>
                                <p>What do you want to highlight on your page</p>
                                <Col md={12} xs={12}>
                                    <div className="cardP" >
                                        {this.state.card.map((item, index) => {
                                            return (
                                                <div key={index} onClick={(e) => this.handleClick(item)} className={this.state.activeDiv === item.id ? "activecardclass" : "cardclass"}>
                                                    <div><i style={{ fontSize: "28px" }} className={item.icon}></i></div>
                                                    <span>{item.title}</span>
                                                </div>

                                            )
                                        })}
                                    </div>
                                    <p />
                                    {this.state.validationMsg ? (<p style={{"color":"red"}}>select about button</p>):""}
                                    <Button onClick={(e) => this.nextClick(e)}>Submit</Button>
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
export default observer(About);