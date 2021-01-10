import React, { Component } from "react";
import { Link } from "react-router-dom";
import TokenService from "../../services/token-services";
import './Header.css'

export default class Header extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken();
  };

  // renderHeaderLinks() {
  //     if (TokenService.hasAuthToken()) {
  //       return (
  //         <div>
  //           <div className="Header__logged-in">
  //             <Link to="/recipe-list" className="link">
  //               Your Recipes!
  //             </Link>
  //             <Link onClick={this.handleLogoutClick} to="/" className="link">
  //               Logout
  //             </Link>
  //           </div>
  //           <h1 className="header">
  //             <span role="img" aria-label="seedling">
  //               🌱
  //             </span>{" "}
  //             Plant-Dex{" "}
  //             <span role="img" aria-label="seedling">
  //               🌱
  //             </span>
  //           </h1>
  //         </div>
  //       );
  //     } else {
  //       return (
  //         <div className="Header__not-logged-in">
  //           <h1 className="header">
  //             <span role="img" aria-label="seedling">
  //               🌱
  //             </span>{" "}
  //             Welcome to Plant-Dex{" "}
  //             <span role="img" aria-label="seedling">
  //               🌱
  //             </span>
  //           </h1>
  //         </div>
  //       );
  //     }
  //   }

  render() {
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
        <div className='header-div'>
        <h1 className="header">
          Recipe Box
        </h1>
        </div>
      </div>
    );
  }
}
