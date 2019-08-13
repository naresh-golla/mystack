import React, { Component } from 'react';
import Progress from "./Progress";
import { Switch, Route, Redirect, Router } from 'react-router-dom';
import { Button } from "reactstrap"
import Bio from "./Bio";
import Pic from "./Pic";
import Location from "./Location";
import Intrest from "./Intrest";
import Hobby from "./Hobby";
import About from './About';
import Link from "./Link";
import Design from "./Design";
import Color from "./Color";
import "./edit.css"
import Domain from "./Domain";
import { Test } from "./Test"
class Edit extends Component {
    constructor() {
        super();
        this.state = {
            aboutDetails: {
                id: "",
                icon: "",
                title: ""
            },
            getColorDetails: {
                id: "",
                src: "",
                alt: ""
            }
        }
    }
    getAboutDetails = ({ id, icon, title }) => {
        this.setState({
            aboutDetails: {
                id: id,
                icon: icon,
                title: title
            }
        }, () => {
            this.props.history.push("/edit/Link");
        })
    }
    getColorDetails = (id, src, alt) => {
        this.setState({
            getColorDetails: {
                id: id,
                src: src,
                alt: alt
            }
        })
    }
    render() {
        console.log(this.state.getColorDetails)
        return (
            <div style={{ "marginTop": "5%" }}>
                <Progress />

                <Switch>
                    <Route
                        exact path="/edit/Bio"
                        component={props => <Bio {...props} />}
                    />
                    <Route exact
                        path="/edit/Pic"
                        component={Pic}
                    />
                    <Route exact
                        path="/edit/Location"
                        component={Location}
                    />
                    <Route exact
                        path="/edit/Intrest"
                        component={Intrest}
                    />
                    <Route
                        path="/edit/Hobby"
                        component={props => <Hobby {...props} />}
                    />
                    <Route
                        path="/edit/About"
                        component={props => <About {...props} getAboutDetails={this.getAboutDetails} />}
                    />
                    <Route
                        path="/edit/Link"
                        component={props => <Link {...props} setAboutDetails={this.state.aboutDetails} />}
                    />
                    <Route
                        path="/edit/Design"
                        component={props => <Design {...props} getColorDetails={this.getColorDetails} />}
                    />
                    <Route
                        path="/edit/Color"
                        component={props => <Color {...props} setColorDetails={this.state.getColorDetails} />}
                    />
                    <Route
                        path="/edit/Domain"
                        component={props => <Domain {...props} />}
                    />
                </Switch>


                <Button onClick={() => { this.props.history.push("/edit/bio"); }}>REVIEW NEXT SCREEN </Button>

            </div>
        )
    }

}
export default Edit;