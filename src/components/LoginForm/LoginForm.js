import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthApiService from '../../services/auth-api-services'
import TokenService from '../../services/token-services'

export default class LoginForm extends Component {

    static defaultProps = {
        onLoginSuccess: () => {}
    }

    handleSubmitJwtAuth = ev => {
        ev.preventDefault()
        this.setState({ error: null})
        const {username, password} = ev.target
    
        AuthApiService.postLogin({
          username: username.value,
          password: password.value
        })
          .then(res => {
            username.value = ''
            password.value = ''
            TokenService.saveAuthToken(res.authToken)
            this.props.onLoginSuccess()
            console.log('after')
          })
          .catch(res => {
            this.setState({ error: res.error})
          })
      }

    render() {
        return (
            <form 
            className="loginForm"
            onSubmit={this.handleSubmitJwtAuth}
          >
            <label 
              className="input-labels" 
              htmlFor="username"
            >
              Username
            </label>
            <input 
              required
              className="input" 
              name="username"
              type="text" 
              placeholder="username" 
            />
            <label className="input-labels" htmlFor="password">
              Password
            </label>
            <input 
              required
              name='password'
              className="input" 
              type="password" 
              placeholder="password" 
            />
            <button className="login-page-buttons" type="submit">
              Sign-in!
            </button>
            <div className="sign-up-button-div">
              <p className="sign-up-p" >Don't have an account?</p>
              <Link className="login-page-buttons" to="/sign-up">
                Sign up here
              </Link>
            </div>
          </form>
        )
    }
}