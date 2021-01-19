import React, { Component } from "react";

export default class InstructionBlock extends Component {
  render() {
    return (
      <li>
        <p>{this.props.step_info}</p>
      </li>
    );
  }
}
