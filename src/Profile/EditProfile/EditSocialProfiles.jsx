import React, { useState } from 'react';
import { observer } from "mobx-react";
import { Accordion, Card, Modal, FormGroup, Button } from 'react-bootstrap';
import { Label, Input } from "reactstrap";
import { socialMediaButtons } from "../profile.constants";
const EditSocialProfiles = observer((props) => {
    let urlInput = React.createRef();

    const [show, setShow] = useState(false);
    const [val, setVal] = useState({});
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSocialprofiles = (item) => {
        //console.log(val,setVal)
        handleShow();
        setVal(item);
    }
    const handleSaveUrl = () => {
        console.log(urlInput.value, "val..")
        props.editProfile.setSocialProfileValue({ ...val, url: urlInput.value });
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
                <Accordion.Toggle as={Card.Header} eventKey="6">
                    Social Media Profiles
             </Accordion.Toggle>
                <Accordion.Collapse eventKey="6">
                    <Card.Body className="card-body">
                        {socialMediaButtons.map((item, index) => (
                            <div className="spotButton" key={index} onClick={() => handleSocialprofiles(item)}>
                                <a href="" onClick={(e)=>{e.preventDefault()}}>
                                    <i className={item.icon} />
                                    <span>{item.title}</span>
                                </a>
                            </div>
                        ))}
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </React.Fragment>
    )

});

export default EditSocialProfiles;