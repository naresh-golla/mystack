import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './css/NavBar.css'
import EditProfile from './Profile/EditProfile';
import { includes } from 'lodash';
import { observer } from "mobx-react";

class NavBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }

  editHandler = (e) => {
    e.preventDefault();
    this.setState({
      show: !this.state.show
    })
  }
componentDidMount(){
  this.props.viewProfile.fetchUserInfo(this.props.user);
  //document.getElementById('some').click()
}
  render() {
    const { username } = this.props
    const pathName = window.location.pathname;
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-md navbar-dark bg-blue fixed-top">
          <span className="navbar-brand" >MyStack</span>
          <ul className="navbar-nav mr-auto">
            {/* <li className="nav-item">
            <Link className="nav-link" to={`/${this.props.viewProfile.domain}`}>{username}</Link>
          </li> */}
            {
              (includes(pathName, "edit"))? 
           "":
          (<button
          className="btn btn-primary"
          onClick={(e) => this.editHandler(e)}
          >Edit
          </button>)
        }
          </ul>
          <button>
            <Link className="nav-link" id="some" to={`/${this.props.viewProfile.domain}`}>{username}</Link>
          </button>
          <button
            className="btn btn-primary"
            onClick={this.props.signOut.bind(this)}
          >Sign out
       </button>
        </nav>
        {this.state.show && <div className="editModal">
          <EditProfile />
        </div>}
      </React.Fragment>
    )
  }
}

export default observer(NavBar);
