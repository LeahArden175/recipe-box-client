import React, { Component } from "react";
import { Link } from "react-router-dom";
import TokenService from "../../services/token-services";
import Context from '../../Context'
import "./Header.css";

export default class Header extends Component {

  static contextType = Context

  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    this.context.handleLoggedIn(false)
  };

  renderHeaderLinks() {
    if (TokenService.hasAuthToken()) {
      return (
        <div>
          <div className="Header__logged-in">
            <Link to="/recipe-list" className="link">
              Your Recipes!
            </Link>
            <Link onClick={this.handleLogoutClick} to="/" className="link">
              Logout
            </Link>
          </div>
          <h1 className="header">Recipe Box</h1>
        </div>
      );
    } else {
      return (
        <div className="Header__not-logged-in">
          <h1 className="header">Welcome to Recipe Box</h1>
        </div>
      );
    }
  }


  render() {
    return (
      <div>
        {this.renderHeaderLinks()}
      </div>
    );
  }
}
