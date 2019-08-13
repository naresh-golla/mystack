import React, { Component } from "react";
import { Container, Row, Col, Accordion, Card, Button, ButtonToolbar, Form, FormGroup, } from 'react-bootstrap';
import { Label, Input } from "reactstrap"
import EditProfile from './EditProfile';
import ViewProfile from './ViewProfile';
import {profileStore} from "../services/store-service"
import "./Profile.css"
class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="bg">
                <div className="divLeft">
                    <EditProfile editProfile={profileStore} />
                </div>
                <div className="divRight">
                   <ViewProfile viewProfile={profileStore} />
                </div>
            </div>
        )
    }
}
export default Profile;