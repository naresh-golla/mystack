import React, { useState } from 'react';
import { observer } from "mobx-react";
import { Accordion, Card, Button, ButtonToolbar } from 'react-bootstrap';
import Avatar from 'react-avatar-edit'

const EditPic = observer((props) => {

    const [src, setSrc] = useState('');
    const [preview, setPreview] = useState(null);

    const onClose = () => {
        setPreview(null)
        setSrc("");
    }

    const onCrop = (preview) => {
        setPreview(preview)
        props.editProfile.setPic(preview);
    }

    const onBeforeFileLoad = (elem) => {
        if (elem.target.files[0].size > 216800) {
            alert("File is too big!");
            elem.target.value = "";
        };
    }
    return (
        <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
                <span>Pics</span>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
                <Card.Body className="card-body">
                    <p><b>Adjust your photo</b></p>
                    <div className="editPic">
                        <Avatar
                            width={358}
                            height={295}
                            onCrop={(e) => onCrop(e)}
                            onClose={(e) => onClose(e)}
                            onBeforeFileLoad={onBeforeFileLoad}
                            src={src}
                            label="upload image"
                            closeIconColor="red"
                        />
                    </div>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    );
});

export default EditPic;