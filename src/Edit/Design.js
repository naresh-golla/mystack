import React, { Component } from "react";
import { Container, Row, Col, Form, FormGroup, Button } from 'react-bootstrap';
class Design extends Component {
    constructor() {
        super();
        this.state = {
            seleted: "",
            cards: [
                {
                    id: 0,
                    src: "https://dummyimage.com/640x4:3",
                    alt: "Card cap"
                },
                {
                    id: 1,
                    src: "https://dummyimage.com/640x4:3",
                    alt: "Card cap"
                }
            ],
            objcolor: {
                id: "",
                src: "",
                alt: ""
            }
        }
    }
    handleClick = (id, src, alt) => {
        this.setState({
            seleted: id,

        })
        this.props.getColorDetails(id, src, alt);
    }
    render() {
        return (
            <Container fluid={true} >
                <Row>
                    <Col md={2} xs={1}></Col>
                    <Col md={8} xs={10}>
                        <div className="text-center">
                            <i className="faFontLarge fa fa-paint-brush"></i>
                        </div>
                        <div className="text-center">
                            <h2>Choose your layout</h2>
                        </div>
                        <Row>
                            <div className="layout">
                                {this.state.cards.map((item, index) => {
                                    return (
                                        <div onClick={(e) => this.handleClick(item.id, item.src, item.alt)} className={(this.state.seleted === item.id) ? "activeCards" : "cards"} key={index} >
                                            <img className=" " src={item.src} alt={item.alt} />
                                        </div>
                                    )
                                })}

                            </div>
                        </Row>
                        <p />
                        <Button>Submit</Button>
                    </Col>
                    <Col md={2} xs={1}></Col>
                </Row>
            </Container>
        )
    }
}
export default Design;