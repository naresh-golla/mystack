import React, { Component } from 'react'
import { Switch, Route, Redirect, Router } from 'react-router-dom'
import { UserSession } from 'blockstack'
import NavBar from './NavBar'
import { appConfig, ME_FILENAME } from './constants'
import Edit from "./Edit"
import './SignedIn.css'
class SignedIn extends Component {
  constructor(props) {
    super(props)
    this.userSession = new UserSession({ appConfig })
    this.signOut = this.signOut.bind(this)
  }
  componentWillMount() {

  }
  signOut(e) {
    e.preventDefault()
    this.userSession.signUserOut()
    window.location = '/'
  }
  render() {
    const usernamefull = this.userSession.loadUserData().username
    const username = usernamefull.split(".")[0]
    return (
      <div className="SignedIn" >
        <NavBar username={username} signOut={this.signOut} />

        <Switch>
          <Route
            path="/edit"
            component={Edit}
          />
        </Switch>

      </div>
    );
  }
}

export default SignedIn
