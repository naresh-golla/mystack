import React, { useState } from 'react';
import { Accordion, Card, Button, ButtonToolbar, Form, FormGroup, useAccordionToggle, Modal } from 'react-bootstrap';
import { Label, Input } from "reactstrap";
import { observer } from "mobx-react";

const EditProfile = observer((props) => {
    let bioInput = React.createRef();
    let urlInput = React.createRef();
    let card = [
        { id: "0", icon: "fa fa-book", title: "Read my Book", url: "" },
        { id: "1", icon: "fa fa-github", title: "View my Projects", url: "" },
        { id: "2", icon: "fa fa-cloud-download", title: "Download my app", url: "" },
        { id: "3", icon: "fa fa-music", title: "Listen to my music", url: "" },
        { id: "4", icon: "fa fa-hand-o-up", title: "Hire me", url: "" },
        { id: "15", icon: "fa fa-align-left", title: "Read my Blog", url: "" },
        { id: "5", icon: "fa fa-chrome", title: "Visit my Website", url: "" },
        { id: "6", icon: "fa fa-cloud-download", title: "Download my resume", url: "" },
        { id: "7", icon: "fa fa-podcast", title: "Listen to my podcast", url: "" },
        { id: "8", icon: "fa fa-building-o", title: "Visit my company", url: "" },
        { id: "9", icon: "fa fa-file-text", title: "Read my articles", url: "" },
        { id: "10", icon: "fa fa-shopping-cart", title: "Visit my store", url: "" },
        { id: "11", icon: "fa fa-newspaper-o", title: "Sign up for my news letter", url: "" },
        { id: "12", icon: "fa fa-user-o", title: "My tinder Profile", url: "" },
        { id: "13", icon: "fa fa-calendar", title: "Attend my event", url: "" },
        { id: "14", icon: "fa fa-thumbs-up", title: "Support my campaign", url: "" },
    ];
    console.log("props", props)
    const clearRefData = () => {
        bioInput.value = "";
    }
    const [show, setShow] = useState(false);
    const [val, setVal] = useState({});
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handlespotButtonClick = (item) => {
        handleShow();
        setVal(item);
    }
    const handleSaveUrl = () => {
        console.log(urlInput.value, "val..")
        props.editProfile.setValValue = val
        handleClose();


    }
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        &nbsp;&nbsp;
            <i className={val.icon} /> &nbsp;&nbsp;
            <span>{val.title}</span>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormGroup>
                        <Label htmlFor="eduCollege">Enter your {val.title} url</Label>
                        <Input ref={el => urlInput = el} />
                    </FormGroup>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="primary" onClick={handleSaveUrl}>
                        Save
                     </Button>
                </Modal.Footer>
            </Modal>
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
                                <div className="bioEdit">
                                    <textarea ref={el => bioInput = el} name="name" cols="48" rows="15" style={{ "resize": "none" }}></textarea>
                                </div>
                                <div className="cancelSave">
                                    <ButtonToolbar>
                                        <Button variant="outline-primary" onClick={() => props.editProfile.setBioValue(bioInput.value)}>save</Button>
                                        <Button variant="outline-danger" onClick={clearRefData}>cancel</Button>
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
                                    {card.map((item, index) => {
                                        return (
                                            <>
                                                <div className="spotButton" key={index} onClick={() => handlespotButtonClick(item)}>
                                                    <a href="#">
                                                        <i className={item.icon} />
                                                        <span>{item.title}</span>

                                                    </a>
                                                </div>
                                            </>
                                        )
                                    })}
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
        </>
    )
});

export default EditProfile;