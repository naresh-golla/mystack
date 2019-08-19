import React from 'react';
import { observer } from "mobx-react";
import { Accordion, Card, Form, FormGroup, Button, ButtonToolbar } from 'react-bootstrap';
import { Label, Input } from "reactstrap";

const EditWork = observer((props) => {
    let currentInput = React.createRef(),
        prevInput = React.createRef();

    const workClickHandler = (e, isCancel = false) => {
        e.preventDefault();
        if(!isCancel) {
            props.editProfile.setWork({
                current: currentInput.value,
                previous: prevInput.value
            });
        } else {
            currentInput.value = "";
            prevInput.value = "";
        }
    }
    return (
        <Card>
            <Accordion.Toggle as={Card.Header} eventKey="4">
                <span>Work Experience</span>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="4">
                <Card.Body className="card-body">
                    <p><b>Enter your work experience</b></p>
                    <Form>
                        <FormGroup>
                            <Label htmlFor="eduSchool">Currently working at</Label>
                            <Input innerRef={el => currentInput = el} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="eduCollege">Previously worked at</Label>
                            <Input innerRef={el => prevInput = el} />
                        </FormGroup>
                        <div className="cancelSave">
                            <ButtonToolbar>
                                <Button variant="outline-primary" onClick={(e) => { workClickHandler(e) }}>save</Button>
                                <Button variant="outline-danger" onClick={(e) => { workClickHandler(e, true) }}>cancel</Button>
                            </ButtonToolbar>
                        </div>
                    </Form>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    )
});

export default EditWork;