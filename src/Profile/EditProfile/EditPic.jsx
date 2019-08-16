import React from 'react';
import { observer } from "mobx-react";
import { Accordion, Card, Button, ButtonToolbar } from 'react-bootstrap';

const EditPic = observer((props) => {

    return (
        <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
                <span>Pic</span>
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
    );
});

export default EditPic;