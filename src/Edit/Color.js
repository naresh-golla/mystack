import React, { Component } from "react";
import { Container, Row, Col, Form, FormGroup, Button } from 'react-bootstrap';
import IroColorPicker from "./IroColorPicker"
class Color extends Component {
    constructor() {
        super();
        this.state = {
            color: "#47d7ff"
        }
    }
    handleClick = (id) => {
        this.setState({
            seleted: id
        })
    }
    onColorChange = (color) => {
        this.setState({
            color: color.hexString
        })
    };
    render() {
        //console.log(this.state.color)

        return (
            <Container fluid={true} >
                <Row>
                    <Col md={2} xs={1}></Col>
                    <Col md={8} xs={10}>
                        <div className="text-center">
                            <i className="faFontLarge fa fa-paint-brush"></i>
                        </div>

                        <div className="text-center">
                            <h1 style={{ color: `${this.state.color}` }} > Customize color for this layout</h1>
                            <div className="colorPicker">
                                <IroColorPicker width="210" color={this.state.color} onColorChange={this.onColorChange} />
                            </div>
                        </div>
                        <Row>
                            <div className="layout">
                                <div className="cards" >
                                    <img className="" src={this.props.setColorDetails.src} alt={this.props.setColorDetails.alt} />
                                </div>
                            </div>
                        </Row>
                        <p />
                        <Button onClick={() => this.props.history.push("/edit/domain")}>Submit</Button>
                    </Col>
                    <Col md={2} xs={1}></Col>
                </Row>
            </Container >
        )
    }
}
export default Color;