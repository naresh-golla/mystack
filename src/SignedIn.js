import React, { Component } from 'react'
import { Switch, Route, Redirect, Router } from 'react-router-dom'
import { UserSession } from 'blockstack'
import NavBar from './NavBar'
import { appConfig, ME_FILENAME } from './constants'
import Edit from "./Edit";
// import Bio from "./Edit/Bio";
import './SignedIn.css'
import Profile from './Profile/Profile';


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
      }
    }
  }
  componentWillMount() {

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
  render() {
    const usernamefull = this.userSession.loadUserData().username
    const username = usernamefull.split(".")[0]
    return (
      <div className="SignedIn" >
        <NavBar username={username} signOut={this.signOut} />

        <Switch>
          <Route path="/edit/" component={Edit} />
          <Route path={`/${username}`} component={() => <Profile username={usernamefull} />} />
        </Switch>

      </div>
    );
  }
}

export default SignedIn
