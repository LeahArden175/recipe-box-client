import React, { Component } from "react";
import { Link } from "react-router-dom";
import config from '../../config'

export default class RegistrationForm extends Component {

  handleSubmitNewUser = event => {
    event.preventDefault()
    
    const {full_name, username, password} = event.target

    const newUser = {
      full_name: full_name.value,
      username: username.value,
      password: password.value
    }
    return fetch(`${config.API_ENDPOINT}/users`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newUser)
    })
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
    .then(newUser => {
      full_name.value = ''
      username.value = ''
      password.value = ''
      this.props.onRegistrationSuccess()
    })
    .catch(res => {
      this.setState({ error: res.error})
    })
  }

  render() {
    return (
      <div>
        <form 
            className="new-user-form" 
            onSubmit={this.handleSubmitNewUser}
          >
            <label 
              className="input-labels" 
              htmlFor="username"
            >
              Username
            </label>
            <input 
              className="input"
              name="username"
              required 
              type="text" 
              placeholder="username" 
              id="reg-username"
              />
            <label className="input-labels" htmlFor="full_name">
              Full Name:
            </label>
            <input 
              className="input"
              name='full_name'
              required
              type="text" 
              placeholder="full name" 
            />
            <label className="input-labels" htmlFor="password">
              Password
            </label>
            <input 
              className="input" 
              name="password"
              required
              type="password" 
              placeholder="password" 
            />
            <div className='new-user-button-div'>
            <button className="new-user-submit-button" type="submit">
              Submit
            </button>
            <Link className='new-user-submit-button' to="/">
              Cancel
            </Link>
            </div>
          </form>
      </div>
    );
  }
}
