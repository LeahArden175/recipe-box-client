import React, { Component } from "react";

export default class InstructionBlock extends Component {
  render() {
    console.log('instruction', this.props)
    return (
      <li>
        <p>{this.props.step_info}</p>
      </li>
    );
  }
}
