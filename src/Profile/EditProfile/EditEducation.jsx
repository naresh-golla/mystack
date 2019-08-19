import React from 'react';
import { observer } from "mobx-react";
import { Accordion, Card, Form, FormGroup, Button, ButtonToolbar } from 'react-bootstrap';
import { Label, Input } from "reactstrap";

const EditEducation = observer((props) => {
    let schoolInput = React.createRef(),
        collegeInput = React.createRef(),
        univInput = React.createRef();

    const eduClickHandler = (e, isCancel = false) => {
        e.preventDefault();
        if(!isCancel) {
            props.editProfile.setEducation({
                school: schoolInput.value,
                college: collegeInput.value,
                univ: univInput.value
            });
        } else {
            schoolInput.value = "";
            collegeInput.value = "";
            univInput.value = "";
        }
    }
    return (
        <Card>
            <Accordion.Toggle as={Card.Header} eventKey="3">
                <span>Education</span>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
                <Card.Body className="card-body">
                    <p><b>Enter your education details</b></p>
                    <Form>
                        <FormGroup>
                            <Label htmlFor="eduSchool">School</Label>
                            <Input innerRef={el => schoolInput = el} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="eduCollege">College</Label>
                            <Input innerRef={el => collegeInput = el} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="eduUni">University</Label>
                            <Input innerRef={el => univInput = el} />
                        </FormGroup>
                        <div className="cancelSave">
                            <ButtonToolbar>
                                <Button variant="outline-primary" onClick={(e) => { eduClickHandler(e) }}>save</Button>
                                <Button variant="outline-danger" onClick={(e) => { eduClickHandler(e, true) }}>cancel</Button>
                            </ButtonToolbar>
                        </div>
                    </Form>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    )
});

export default EditEducation;