import React, { Component } from 'react';
import Progress from "./Progress";
import { Switch, Route, Redirect, Router } from 'react-router-dom';
import Bio from "./Bio";
import Pic from "./Pic";
import Location from "./Location";
import Intrest from "./Intrest";
import Hobby from "./Hobby";
import About from './About';
class Edit extends Component {
    constructor() {
        super();
        this.state = {}
    }
    render() {
        return (
            <div style={{ "marginTop": "5%" }}>
                <Progress />
                <Bio />
                <Pic />
                <Location />
                <Intrest />
                <Hobby />
                <About />
            </div>
        )
    }

}
export default Edit;