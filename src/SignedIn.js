import React, { Component } from 'react'
import { Switch, Route, Redirect, Router } from 'react-router-dom'
import { UserSession } from 'blockstack'
import NavBar from './NavBar'
import { appConfig, ME_FILENAME } from './utils/constants'
import Edit from "./Edit";
// import Bio from "./Edit/Bio";
import './css/SignedIn.css'
import Profile from './Profile/Profile';
import {profileStore} from "./services/store-service";
import { observer } from "mobx-react";
import HTTPService from './services/http-service';
import {get} from 'lodash';
import { JsonKeys } from "./utils/constants";

class SignedIn extends Component {
  constructor(props) {
    super(props)
    this.userSession = new UserSession({ appConfig });
    this.signOut = this.signOut.bind(this);
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
      },
      domain: ""
    }
  }
  componentWillMount() {

  }
  componentDidMount(){
    const httpService = new HTTPService();
    httpService.fetchUserInfo(this.userSession.loadUserData().username).then((response) => {
      const { domain } = get(response, [JsonKeys.DATA], {});
      this.setState({ domain });
    })
  }
  signOut(e) {
    e.preventDefault()
    this.userSession.signUserOut()
    window.location = '/'
  }
  getAboutDetails = (id, icon, title) => {
    this.setState({
      aboutDetails: {
        id: id,
        icon: icon,
        title: title
      }
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

  setDomain(domain) {
    this.setState({ domain });
  }
  render() {
    const usernamefull = this.userSession.loadUserData().username
    const username = usernamefull.split(".")[0]
    return (
      <div className="SignedIn" >
        <NavBar username={username} user={usernamefull} signOut={this.signOut} viewProfile= {profileStore}/>
        <Switch>
          <Route path="/edit/" component={(props) => <Edit 
                                                          username={usernamefull} 
                                                          {...props} 
                                                          userid={username} 
                                                          setDomain={(data) => this.setDomain(data)} />
                                          }  />
          <Route path={"/"+ this.state.domain} component={() => <Profile username={usernamefull} />} />
        </Switch>

      </div>
    );
  }
}

export default SignedIn;
