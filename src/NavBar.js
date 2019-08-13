import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

class NavBar extends Component {

  render() {
    const username = this.props.username
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-blue fixed-top">
        <Link className="navbar-brand" to="/">MyStack</Link>
        <ul className="navbar-nav mr-auto">
          {/* <li className="nav-item">
            <Link className="nav-link" to={`/${username}`}>{username}</Link>
          </li> */}
          <button
            className="btn btn-primary"
            onClick={(e) => alert(e)}
          >Edit
       </button>
        </ul>
        {/* <button
          className="btn btn-primary"
          onClick={(e) => alert(e)}
        >Edit
       </button> */}
        <button>
          <Link className="nav-link" to={`/${username}`}>{username}</Link>
        </button>
        <button
          className="btn btn-primary"
          onClick={this.props.signOut.bind(this)}
        >Sign out
       </button>
      </nav>
    )
  }
}

export default NavBar
