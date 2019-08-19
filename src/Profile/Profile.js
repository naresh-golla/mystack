import React, { Component } from "react";
import ViewProfile from './ViewProfile';
import { profileStore } from "../services/store-service"
import "./Profile.css"
class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <ViewProfile viewProfile={profileStore} />
        )
    }
}
export default Profile;