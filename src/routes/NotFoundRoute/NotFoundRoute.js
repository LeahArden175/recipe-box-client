import React, { Component } from "react";
import "./NotFoundRoute.css";

export default class NotFoundRoute extends Component {
  render() {
    return (
      <section className="not-found">
        <h2>404 - Page not found</h2>
        <p>Try going back to your previous page.</p>
      </section>
    );
  }
}
