import React, { Component } from 'react'
// import { Container, Row, Col } from 'reactstrap';
import { Container, Row, Col } from 'react-bootstrap';
class Progress extends Component {
    constructor() {
        super();
        this.state = {}
    }
    render() {
        return (
            <div style={{ "marginTop": "5%", "paddingBottom": "5%" }}>

                <Container fluid={true} >
                    <Row>
                        <Col md={2} className="d-none d-sm-block"></Col>
                        <Col md={8} sm={12} xs={12}>
                            <div className="root">
                                <ul className="progressbar">
                                    <li className="active">Bio</li>
                                    <li>Pic</li>
                                    <li>Location</li>
                                    <li>Intrests</li>
                                    <li>Hobby</li>
                                    <li>About</li>
                                    <li>Design</li>
                                    <li>Domain</li>
                                </ul>

                            </div>
                        </Col>
                        <Col md={2} className="d-none d-sm-block"></Col>
                    </Row>
                </Container>

            </div>
        )
    }
}
export default Progress;