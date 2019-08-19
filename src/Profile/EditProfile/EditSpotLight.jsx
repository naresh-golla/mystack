import React, { useState } from 'react';
import { observer } from "mobx-react";
import { Accordion, Card, Button, FormGroup, Modal } from 'react-bootstrap';
import { Label, Input } from "reactstrap";
import { SpotLightButtons } from "../profile.constants";

const EditSpotLight = observer((props) => {

    let urlInput = React.createRef();

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
        props.editProfile.setSpotlightValue({ ...val, url: urlInput.value });
        handleClose();
    }

    return (
        <React.Fragment>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <i className={val.icon} />
                        <span style={{ marginLeft: "10px" }}>{val.title}</span>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormGroup>
                        <Label htmlFor="eduCollege">Enter your {val.title} url</Label>
                        <Input innerRef={el => urlInput = el} />
                    </FormGroup>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="primary" onClick={handleSaveUrl}>Save</Button>
                </Modal.Footer>
            </Modal>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2">
                    <span>Spotlight Button</span>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                    <Card.Body className="card-body">
                        <div className="spotButtonDiv">
                            <p><b>select a Spotlight Button about your page</b></p>
                            {SpotLightButtons.map((item, index) => (
                                <div className="spotButton" key={index} onClick={() => handlespotButtonClick(item)}>
                                    <a href="#">
                                        <i className={item.icon} />
                                        <span>{item.title}</span>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </React.Fragment>
    );
});

export default EditSpotLight;