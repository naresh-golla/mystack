import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import EditProfile from './Profile/EditProfile';
import { includes } from 'lodash';

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

  render() {
    const username = this.props.username
    const pathName = window.location.pathname;
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-md navbar-dark bg-blue fixed-top">
          <Link className="navbar-brand" to="/">MyStack</Link>
          <ul className="navbar-nav mr-auto">
            {/* <li className="nav-item">
            <Link className="nav-link" to={`/${username}`}>{username}</Link>
          </li> */}
            {includes(pathName, `${username}`) && <button
              className="btn btn-primary"
              onClick={(e) => this.editHandler(e)}
            >Edit
            </button>}
          </ul>
          <button>
            <Link className="nav-link" to={`/${username}`}>{username}</Link>
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

export default NavBar
