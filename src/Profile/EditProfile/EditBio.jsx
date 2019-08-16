import React from 'react';
import { observer } from "mobx-react";
import { Accordion, Card, Button, ButtonToolbar } from 'react-bootstrap';

const EditBio = observer((props) => {
    //text area ref
    let bioInput = React.createRef();

    //Save and Cancel click handlers
    const bioClickHandler = (e, isCancel= false) => {
        e.preventDefault();
        if(!isCancel){
            props.editProfile.setBioValue(bioInput.value);
        } else {
            bioInput.value = ""
        }
    }

    return (
        <Card className="card">
            <Accordion.Toggle as={Card.Header} eventKey="0">
                <span>Bio</span>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
                <Card.Body className="card-body">
                    <p><b>Edit Your Bio hear</b></p>
                    <div className="bioEdit">
                        <textarea ref={el => bioInput = el} name="name" cols="48" rows="15" style={{ "resize": "none" }}></textarea>
                    </div>
                    <div className="cancelSave">
                        <ButtonToolbar>
                            <Button variant="outline-primary" onClick={(e) => { bioClickHandler(e) }}>save</Button>
                            <Button variant="outline-danger" onClick={(e) => { bioClickHandler(e, true) }}>cancel</Button>
                        </ButtonToolbar>
                    </div>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    )
});

export default EditBio;