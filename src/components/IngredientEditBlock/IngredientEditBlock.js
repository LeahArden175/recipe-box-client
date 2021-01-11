import React, { Component } from "react";
import { Link } from "react-router-dom";
import './IngredientEditBlock.css'

export default class IngredientEditBlock extends Component {
  render() {
    return (
        <li className='ingredient-list-items'>
          <div className='ingredient'>
        <p className="one-ingredient">{this.props.amount}</p>
        <p className="one-ingredient">{this.props.unit}</p>
        <p className="one-ingredient">{this.props.food_item}</p>
        </div>
        <Link to={`/edit-ingredient/${this.props.id}`} className="recipe-button">
            Edit
          </Link>
        </li>
    );
  }
}
