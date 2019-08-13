import React from 'react';
import { Accordion, Card, Button, ButtonToolbar, Form, FormGroup, } from 'react-bootstrap';
import { Label, Input } from "reactstrap";
import { observer } from "mobx-react";

const EditProfile = observer((props) => {
    let bioInput = React.createRef();
    console.log("props", props)
    return (
        <div className="editLeftPanel">
            <div className="text-center">
                <h1>Edit</h1>
            </div>
            <Accordion defaultActiveKey="0" className="myaccordion">
                <Card className="card">
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        Bio
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body className="card-body">
                            <p><b>Edit Your Bio hear</b></p>
                            <div class="bioEdit">
                                <textarea ref={el => bioInput = el} name="name" cols="48" rows="15" style={{ "resize": "none" }}></textarea>
                            </div>
                            <div className="cancelSave">
                                <ButtonToolbar>
                                    <Button variant="outline-primary" onClick={() => props.editProfile.setBioValue(bioInput.value)}>save</Button>
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
    )
});

export default EditProfile;