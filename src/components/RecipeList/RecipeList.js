import React, { Component } from "react";
import { Link } from "react-router-dom";
import RecipeBlock from "../RecipeBlock/RecipeBlock";

export default class RecipeList extends Component {
  render() {
    return (
      <li>
          <Link to={`recipe/${this.props.id}`}>
          <h3>{this.props.title}</h3>
          </Link>
      </li>
    );
  }
}
