import React, { Component } from 'react'
import { UserSession } from 'blockstack'
import { appConfig } from './constants'
import './Landing.css'
import globe from "./space_white.svg";
class Landing extends Component {

  constructor() {
    super()
    this.userSession = new UserSession({ appConfig })
  }

  signIn(e) {
    e.preventDefault()
    this.userSession.redirectToSignIn()
  }
  // onClick={this.signIn.bind(this)}
  render() {
    return (
      <div className="wrapper">
        <div className="header" style={{ "display": "flex", "justifyContent": "space-between", "paddingTop": "3%" }}>
          <div style={{ "paddingLeft": "10%" }}>

            <h1>MyStack
              </h1>
          </div>
          <div className="sub-menu" style={{ "display": "flex", "paddingRight": "20%" }}>
            <div id="menu-item-45"
              className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-21 current_page_item menu-item-45">
              <a id="login_btn" onClick={this.signIn.bind(this)} style={{ "cursor": "pointer" }}>
                <p id="login" style={{ "color": "white", "padding": "7px 12px", "borderRadius": "6px", "marginRight": "10px" }}>
                  <strong style={{ "padding": "9px 16px", "border": "1px solid #fff", "borderRadius": "6px" }}>Login</strong>
                </p>
              </a>
            </div>

            <div id="menu-item-39" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-39" style={{
              "display": "flex",
              "justifyContent": "center"
            }}>
              <a id="discover_btn" style={{ "cursor": "pointer" }}>
                <p id="discover" style={{ "color": "white", "border": "1px solid #fff", "padding": "6px 12px", "borderRadius": "6px" }}>
                  <img src={globe} style={{ "width": "20px", "marginRight": "6px" }} />
                  <strong style={{ "borderRadius": "6px" }}>Discover</strong>
                </p>
              </a>
            </div>
          </div>
        </div >


        <section className="section-banner section-banner--variant2">
          <div className="nav__dd nav__dd-static visible-xs-block">
            <span>

              <h1 style={{ "color": "#3bccfc" }}>MyStack</h1>
            </span>

            <ul>
              <li className="menu-nodeoption">
                <a href="#" id="login_btn" onClick={this.signIn.bind(this)} style={{ "cursor": "pointer" }}>
                  <p id="login" style={{ "color": "white", "padding": "4px 12px", "borderRadius": "6px", "marginRight": "10px" }}>
                    <strong style={{ "padding": " 9px 16px", "border": "1px solid #fff", "borderRadius": "6px" }}>Login</strong>
                  </p>
                </a>
              </li>

              <li>
                <a id="discover_btn" style={{ "cursor": "pointer" }}>
                  <p id="discover"
                    style={{ "color": "white", "border": "1px solid #fff", "padding": "4px 12px", "borderRadius": "6px" }} >
                    <img src={globe} style={{ "width": "20px", "marginRight": "6px" }} alt="explore" />
                    <strong
                      style={{ "borderRadius": "6px" }}>Discover</strong>
                  </p>
                </a>
              </li >
            </ul >
          </div >


          <div className="shell shell--wide" style={{ "marginTop": "-3 %" }}>
            < div className="section__content" >
              <h1>
                Create your brand.
                Grow your audience
                  </h1>

              <p>
                Get your free personalized web page in a decentralized way with Blockstack.
                Create a page to promote who you are and what you do in one link.
                  </p>

              <a href="#node-now" className="btn-purple" onClick={this.signIn.bind(this)}>
                Signup With Blockstack
                  </a>
            </div >


          </div>

          <span className="section-after"></span>
        </section >
      </div>
    );
  }
}

export default Landing
