import React from 'react';
import { observer } from "mobx-react";
import { Accordion, Card, Button, ButtonToolbar } from 'react-bootstrap';

const EditAbout = observer((props) => {
    //text area ref
    let aboutInput = React.createRef();

    //Save and Cancel click handlers
    const aboutClickHandler = (e, isCancel = false) => {
        e.preventDefault();
        if (!isCancel) {
            props.editProfile.setAboutValue(aboutInput.value);
        } else {
            aboutInput.value = ""
        }
    }

    return (
        <Card className="card">
            <Accordion.Toggle as={Card.Header} eventKey="0">
                <span>About</span>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
                <Card.Body className="card-body">
                    <p><b>Edit About</b></p>
                    <div className="bioEdit">
                        <textarea ref={el => aboutInput = el} name="name" cols="48" rows="15" style={{ "resize": "none" }}></textarea>
                    </div>
                    <div className="cancelSave">
                        <ButtonToolbar>
                            <Button variant="outline-primary" onClick={(e) => { aboutClickHandler(e) }}>save</Button>
                            <Button variant="outline-danger" onClick={(e) => { aboutClickHandler(e, true) }}>cancel</Button>
                        </ButtonToolbar>
                    </div>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    )
});

export default EditAbout;