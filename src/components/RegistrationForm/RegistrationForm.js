import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class RegistrationForm extends Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            required
            placeholder="username"
            id="reg-username"
          />
          <label htmlFor="full_name">Full Name</label>
          <input
            type="text"
            required
            placeholder="Full Name"
            id="reg-full-name"
          />
          <label htmlFor="password">Password</label>
          <input
            type="text"
            required
            placeholder="password"
            id="reg-password"
          />
          <button type='submit'>
              Sign up
          </button>
          <Link to='/'>Already have an account? Sign in</Link>
        </form>
      </div>
    );
  }
}
