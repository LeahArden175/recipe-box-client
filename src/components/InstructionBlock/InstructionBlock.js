import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class InstructionBlock extends Component {
  render() {
    return (
      <li>
        <p>{this.props.step_info}</p>
      </li>
    );
  }
}
