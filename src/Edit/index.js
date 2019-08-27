import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { createProfile } from "../services/create-service";
import Progress from "./Progress";
import Bio from "./Bio";
import Pic from "./Pic";
import Location from "./Location";
import Intrest from "./Intrest";
import Hobby from "./Hobby";
import About from './About';
import Link from "./Link";
import "./edit.css"
import Domain from "./Domain";

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
                        component={props => <Bio createProfile={createProfile} {...props} username={this.props.username} />}
                    />
                    <Route exact
                        path="/edit/Pic"
                        component={props => <Pic createProfile={createProfile} {...props} />}
                    />
                    <Route exact
                        path="/edit/Location"
                        component={props => <Location createProfile={createProfile} {...props} />}
                    />
                    <Route exact
                        path="/edit/Intrest"
                        component={props => <Intrest createProfile={createProfile} {...props} />}
                    />
                    <Route
                        path="/edit/Hobby"
                        component={props => <Hobby createProfile={createProfile} {...props} />}
                    />
                    <Route
                        path="/edit/About"
                        component={props => <About createProfile={createProfile} {...props} getAboutDetails={this.getAboutDetails} />}
                    />
                    <Route
                        path="/edit/Link"
                        component={props => <Link createProfile={createProfile} {...props} setAboutDetails={this.state.aboutDetails} />}
                    />
                    {/* <Route
                        path="/edit/Design"
                        component={props => <Design {...props} getColorDetails={this.getColorDetails} />}
                    /> 
                    <Route
                        path="/edit/Design"
                        component={props => <Design {...props} getColorDetails={this.getColorDetails} />}
                    />*/}
                    <Route
                        path="/edit/Domain"
                        component={props => <Domain 
                                                    createProfile={createProfile} 
                                                    {...props} 
                                                    userid={this.props.userid}
                                                    setDomain={(data) => this.props.setDomain(data)} />}
                    />
                </Switch>
            </div>
        )
    }

}
export default Edit;