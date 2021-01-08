import React, { Component } from "react";
import './IngredientBlock.css'

export default class IngredientBlock extends Component {
  render() {
    return (
        <li className='ingredient-list-items'>
        <p className="one-ingredient">{this.props.amount}</p>
        <p className="one-ingredient">{this.props.unit}</p>
        <p className="one-ingredient">{this.props.food_item}</p>
        </li>
    );
  }
}
