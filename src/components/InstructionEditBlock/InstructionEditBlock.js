import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class InstructionBlock extends Component {
  render() {
    return (
      <li>
        <Link
          to={`/edit-instruction/${this.props.id}`}
          className="recipe-button"
        >
          Edit
        </Link>
        <p>{this.props.step_info}</p>
        <div className="edit-button-div"></div>
      </li>
    );
  }
}
