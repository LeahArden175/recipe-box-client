import React, { Component } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import "./LandingRoute.css";

export default class LandingRoute extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  };

  handleLoginSuccess = () => {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || "/recipe-list";
    history.push(destination);
  };

  render() {
    return (
      <div className="landing-page-div">
          <p className="landing-page-info">
            This recipe box is a great way to organize your favorite recipes and
            look them up easily!
          </p>
          <p className="landing-page-info">
            Log your favorite recipes and use tags to make them easy to find.
            You can also use tags to find recipes for specific ingreidents!
          </p>
        <div className="login-info">
          <p className="landing-page-p">Get Started!</p>
          <p className="landing-page-p">
            You are more than welcome to create your own account. However, to
            get the full experience I recommend you use the following
            established account:
          </p>
          <p className="landing-page-p">Username: testuser </p>
          <p className="landing-page-p">Password: HiddenPassword12!</p>
        </div>
        <LoginForm onLoginSuccess={this.handleLoginSuccess} />
      </div>
    );
  }
}
