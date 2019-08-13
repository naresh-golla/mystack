import React, { Component } from "react";
import { Container, Row, Col, Accordion, Card, Button, ButtonToolbar, Form, FormGroup, } from 'react-bootstrap';
import { Label, Input } from "reactstrap"
import "./Profile.css"
class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="bg">
                <div className="divLeft">
                    <div className="editLeftPanel">
                        <div className="text-center">
                            <h1>Edit</h1>
                        </div>
                        {/* ////////////////////////////// */}
                        <Accordion defaultActiveKey="0" className="myaccordion">
                            <Card className="card">
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                    Bio
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body className="card-body">
                                        <p><b>Edit Your Bio hear</b></p>
                                        <div class="bioEdit">
                                            <textarea name="name" cols="48" rows="15" style={{ "resize": "none" }}></textarea>
                                        </div>
                                        <div className="cancelSave">
                                            <ButtonToolbar>
                                                <Button variant="outline-primary">save</Button>
                                                <Button variant="outline-danger">cancel</Button>
                                            </ButtonToolbar>
                                        </div>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="1">
                                    Pic
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body className="card-body">
                                        <p><b>Adjust your photo</b></p>
                                        <div className="editPic">

                                        </div>
                                        <div className="changePhoto">
                                            <ButtonToolbar>
                                                <Button variant="outline-primary">Change Photo</Button>
                                            </ButtonToolbar>
                                        </div>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="2">
                                    Spotlight Button
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="2">
                                    <Card.Body className="card-body">
                                        <div className="spotButtonDiv">
                                            <p><b>select a Spotlight Button about your page</b></p>
                                            <div className="spotButton">
                                                <a href="#">
                                                    <i className="fa fa-building" />
                                                    <span>Visit my Website</span>
                                                </a>
                                            </div>
                                            <div className="spotButton">
                                                <a href="#">
                                                    <i className="fa fa-book" />
                                                    <span>Read my Book</span>
                                                </a>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="3">
                                    Education
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="3">
                                    <Card.Body className="card-body">
                                        <p><b>Enter your education details</b></p>
                                        <Form>
                                            <FormGroup>
                                                <Label htmlFor="eduSchool">School</Label>
                                                <Input />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label htmlFor="eduCollege">College</Label>
                                                <Input />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label htmlFor="eduUni">University</Label>
                                                <Input />
                                            </FormGroup>
                                        </Form>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="4">
                                    Work Experience
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="4">
                                    <Card.Body className="card-body">
                                        <p><b>Enter your work experience</b></p>
                                        <Form>
                                            <FormGroup>
                                                <Label htmlFor="eduSchool">Currently working at</Label>
                                                <Input />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label htmlFor="eduCollege">Previously worked at</Label>
                                                <Input />
                                            </FormGroup>
                                        </Form>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="5">
                                    Design
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="5">
                                    <Card.Body className="card-body">Hello! I'm another body</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="6">
                                    Intrests
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="6">
                                    <Card.Body className="card-body">Hello! I'm another body</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="7">
                                    Hobby
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="7">
                                    <Card.Body className="card-body">Hello! I'm another body</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </div>
                </div>
                {/* <Row>
                         <Col md={3} xs={1} ></Col>
                        <Col md={6} xs={10} className=""> */}
                <div className="divRight">
                    <div className="alignCenter">
                        <div className="paddingTop">
                            <div className="userCard">
                                <header>
                                    <div className="pic"></div>
                                </header>
                                <div className="heading">
                                    <section>
                                        <h1>Naresh Golla</h1>
                                    </section>
                                    <section>
                                        <h2>Web Developer in Hyderabad, India</h2>
                                    </section>
                                    <section>
                                        <div className="aboutButton">
                                            <a href="#" target="_blank" class="btn-purple" sytle={{}}><i className="fa fa-chrome facon"></i>Visit my website</a>
                                        </div>
                                    </section>
                                    <section>
                                        <div className="context">
                                            <p>Hi, I am a professional web developer. (Though I have started my professional career in software development with Visual Basic.net) . Over the last few years I have developed a wide range of applications/softwares usingJava, HTML , PHP , Javascript, jQuery , Oracle andMySQL for different companies and business.</p>
                                            <p>I have also experience in OOP, MVC Framework, Java . I want to achieve the peak position by providing high quality work and by learning new technologies.And have experience of 4 years in PHP , 1 years inWordpress. Though I am working most of my time with PHP but I love Java most among all the programming language.</p>
                                            <p>Now I am working for a software company Tech Mahindra</p>
                                        </div>
                                    </section>
                                    <section>
                                        <div className="Edu_Exp">
                                            <div className="work">
                                                <h4>Work Experience</h4>
                                                <ul class="work_ul">
                                                    <li> Home</li>
                                                    <li>Menu 1</li>
                                                    <li>Menu 2</li>
                                                    <li>Menu 3</li>
                                                </ul>
                                            </div>
                                            <div className="work">
                                                <h4>Education</h4>
                                                <ul class="exp_ul">
                                                    <li> Home</li>
                                                    <li>Menu 1</li>
                                                    <li>Menu 2</li>
                                                    <li>Menu 3</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>
                                    <section>
                                        <div className="socialIcons">
                                            <ul class="list-inline">
                                                <li class="list-inline-item "><a href="#"><i class=" fa fa-facebook" title="visit my facebook profile"></i></a></li>
                                                <li class="list-inline-item "><a href="#"><i class=" fa fa-twitter"></i></a></li>
                                                <li class="list-inline-item "><a href="#"><i class=" fa fa-telegram"></i></a></li>
                                                <li class="list-inline-item "><a href="#"><i class=" fa fa-youtube-play"></i></a></li>
                                                <li class="list-inline-item "><a href="#"><i class=" fa fa-slack"></i></a></li>
                                            </ul>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>

                        {/* </Col>
                        <Col md={3} xs={1} ></Col> 
                    </Row> */}
                    </div>

                </div>
            </div>
        )
    }
}
export default Profile;