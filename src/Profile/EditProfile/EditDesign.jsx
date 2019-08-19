import React from 'react';
import { observer } from "mobx-react";
import { Accordion, Card, Form, FormGroup, Button, ButtonToolbar } from 'react-bootstrap';
import { Label, Input } from "reactstrap";
import IroColorPicker from "../../Edit/IroColorPicker"
const EditDesign = observer((props) => {
    const onColorChange = (color) => {
        props.editProfile.setDesignValue(color.hexString);
    };
    return (
        <Card>
            <Accordion.Toggle as={Card.Header} eventKey="5">
                Design
             </Accordion.Toggle>
            <Accordion.Collapse eventKey="5">
                <Card.Body className="card-body">
                    <div>
                        <IroColorPicker width="210"
                            // color={this.state.color} 
                            onColorChange={onColorChange}
                        />
                    </div>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    )

});

export default EditDesign;