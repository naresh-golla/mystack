import React, { Component } from 'react'
// import { Container, Row, Col } from 'reactstrap';
import { Container, Row, Col } from 'react-bootstrap';
class Progress extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    getPathname = (path) => {
        let returnVal = 0;
        switch (path.toLowerCase()) {
            case "/edit/bio":
                returnVal = 0
                break;
            case "/edit/pic":
                returnVal = 1
                break;
            case "/edit/location":
                returnVal = 2
                break;

            case "/edit/intrest":
                returnVal = 3
                break;

            case "/edit/hobby":
                returnVal = 4
                break;
            case "/edit/about":
                returnVal = 5
                break;
            case "/edit/link":
                returnVal = 5
                break;
            case "/edit/design":
                returnVal = 6
                break;
            case "/edit/color":
                returnVal = 6
                break;
            case "/edit/domain":
                returnVal = 7
                break;
            default:
                break;
        }
        return returnVal
    }
    render() {
        const pathkey = this.getPathname(window.location.pathname);
        return (
            <div style={{ "marginTop": "5%", "paddingBottom": "5%" }}>

                <Container fluid={true} >
                    <Row>
                        <Col md={2} className="d-none d-sm-block"></Col>
                        <Col md={8} sm={12} xs={12}>
                            <div className="root">
                                <ul className="progressbar">
                                    <li className={pathkey >= 0 ? "active" : ""}>Bio</li>
                                    <li className={pathkey >= 1 ? "active" : ""}>Pic</li>
                                    <li className={pathkey >= 2 ? "active" : ""}>Location</li>
                                    <li className={pathkey >= 3 ? "active" : ""}>Intrests</li>
                                    <li className={pathkey >= 4 ? "active" : ""}>Hobby</li>
                                    <li className={pathkey >= 5 ? "active" : ""}>About</li>
                                    <li className={pathkey >= 6 ? "active" : ""}>Design</li>
                                    <li className={pathkey >= 7 ? "active" : ""}>Domain</li>
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