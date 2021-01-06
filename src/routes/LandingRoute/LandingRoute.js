import React, { Component } from "react";
import LoginForm from  '../../components/LoginForm/LoginForm'

export default class LandingRoute extends Component {

  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  };

    handleLoginSuccess = () => {
      const { location, history } = this.props
      const destination = (location.state || {}).from || '/'
      history.push(destination)
    }

  render() {
    return (
      <div>
        <h3>
          This reicpe box is a great way to organize your favorite recipes and
          look them up easily!
        </h3>
        <h4>
          Log your favorite recipes and use tags to make them easy to find. You
          can also use tags to find recipes for specific ingreidents!
        </h4>
        <div>
          <p>Get Started!</p>
          <p>
            You are more than welcome to create your own account. However, to
            get the full experience I recommend you use the following
            established account:
          </p>
          <p>Username: testuser </p>
          <p>Password: HiddenPassword12!</p>
        </div>
        <LoginForm onLoginSuccess={this.handleLoginSuccess}/>
      </div>
    );
  }
}
