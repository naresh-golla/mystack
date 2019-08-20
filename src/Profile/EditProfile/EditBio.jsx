import React from 'react';
import { observer } from "mobx-react";
import { Accordion, Card, Form, FormGroup, Button, ButtonToolbar } from 'react-bootstrap';
import { Label, Input } from "reactstrap";
import { get } from "lodash";

const EditBio = observer((props) => {
    let firstNameInput = React.createRef(),
        lastNameInput = React.createRef(),
        designationInput = React.createRef(),
        locationInput = React.createRef();

    const { bio } = props.editProfile;

    const bioClickHandler = (e, isCancel = false) => {
        e.preventDefault();
        if (!isCancel) {
            props.editProfile.setBio({
                firstName: firstNameInput.value,
                lastName: lastNameInput.value,
                designation: designationInput.value,
                location: locationInput.value,
            });
        } else {
            firstNameInput.value = "";
            lastNameInput.value = "";
            designationInput.value = "";
            locationInput.value = ""
        }
    }
    return (
        <Card>
            <Accordion.Toggle as={Card.Header} eventKey="9">
                <span>Edit Bio</span>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="9">
                <Card.Body className="card-body">
                    {/* <p><b>Enter your education details</b></p> */}
                    <Form>
                        <FormGroup>
                            <Label htmlFor="firstName">First Name</Label>
                            <Input innerRef={el => firstNameInput = el} defaultValue={get(bio, "firstName", "")} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input innerRef={el => lastNameInput = el} defaultValue={get(bio, "lastName", "")} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="designation">Designation</Label>
                            <Input innerRef={el => designationInput = el} defaultValue={get(bio, "designation", "")} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="location">Location</Label>
                            <Input innerRef={el => locationInput = el} defaultValue={get(bio, "location", "")} />
                        </FormGroup>
                        <div className="cancelSave">
                            <ButtonToolbar>
                                <Button variant="outline-primary" onClick={(e) => { bioClickHandler(e) }}>save</Button>
                                <Button variant="outline-danger" onClick={(e) => { bioClickHandler(e, true) }}>cancel</Button>
                            </ButtonToolbar>
                        </div>
                    </Form>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    )
});

export default EditBio;