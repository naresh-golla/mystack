import React, { Component } from "react";
import { Formik, Field } from "formik"
import FileUpload from "./FileUpload"
import { Container, Row, Col, Form, FormGroup, Button } from 'react-bootstrap';
import Avatar from 'react-avatar-edit'
class Pic extends Component {
    constructor(props) {
        super(props)
        const src = ''
        this.state = {
            preview: null,
            src
        }
    }

    onClose = () => {
        this.setState({ preview: null })
    }

    onCrop = (preview) => {
        this.setState({ preview })
    }

    onBeforeFileLoad = (elem) => {
        if (elem.target.files[0].size > 216800) {
            alert("File is too big!");
            elem.target.value = "";
        };
    }
    render() {
        return (
            <Container fluid={true} >
                <Row>
                    <Col md={3} xs={2}></Col>
                    <Col md={6} xs={8}>
                        <div className="text-center">
                            <h1>Upload Pic</h1>
                            <p>&nbsp;</p>
                        </div>
                        <Row>
                            {this.state.preview && <div className="PreviewImage">
                                <img src={this.state.preview} alt="Profile Pic" />
                            </div>}
                        </Row>
                        <Row>
                            <div className="avatarCss">
                                <span>
                                    <Avatar
                                        width={390}
                                        height={295}
                                        onCrop={this.onCrop}
                                        onClose={this.onClose}
                                        onBeforeFileLoad={this.onBeforeFileLoad}
                                        src={this.state.src}
                                        label="upload image"
                                        closeIconColor="red"
                                    />
                                </span>
                            </div>
                        </Row>
                        <Row>
                            <Button onClick={() => this.props.history.push("/edit/location")} className="btn btn-outline-primary">Submit</Button>
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Pic;