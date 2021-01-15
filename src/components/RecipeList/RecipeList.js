import React, { Component } from "react";
import { Link } from "react-router-dom";
import './RecipeList.css'

export default class RecipeList extends Component {
  render() {

    return (
      <li className='list-items'>
          <Link className='recipe-title-link' to={`recipe/${this.props.id}`}>
          <h3>{this.props.title}</h3>
          </Link>
      </li>
    );
  }
}
