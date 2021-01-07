import React, { Component } from "react";

export default class IngredientBlock extends Component {
  render() {
    console.log(this.props);
    return (
        <li>
        <p>{this.props.food_item}  {this.props.amount}   {this.props.unit}</p>
        </li>
    );
  }
}
