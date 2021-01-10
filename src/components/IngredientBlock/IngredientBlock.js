import React, { Component } from "react";
import { Link } from "react-router-dom";
import './IngredientBlock.css'

export default class IngredientBlock extends Component {
  render() {
    return (
        <li className='ingredient-list-items'>
        <p className="one-ingredient">{this.props.amount}</p>
        <p className="one-ingredient">{this.props.unit}</p>
        <p className="one-ingredient">{this.props.food_item}</p>
        <Link to={`/edit-ingredient/${this.props.id}`} className="recipe-button">
            Edit
          </Link>
        </li>
    );
  }
}
